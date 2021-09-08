import type {App} from "../../models/App";
import {status} from "../../models/Player";

interface Params {
  lobbyId: number;
}

const startGame = async (app: App, params: Params): Promise<void> => {
  try {
    const {eos, io, mongo, socket} = app;
    const {lobbyId} = params;

    const lobby = await mongo.db.collection("lobbies").findOne({lobbyId});

    await mongo.db.collection("players").updateOne({
      username: lobby.host.username
    }, {
      $set: {
        "account.status": status.INGAME,
        "account.lobbyId": 0,
        "account.gameId": lobbyId
      }
    });

    await mongo.db.collection("players").updateOne({
      username: lobby.challengee.username
    }, {
      $set: {
        "account.status": status.INGAME,
        "account.lobbyId": 0,
        "account.gameId": lobbyId
      }
    });

    const hostTable = await eos.findPlayer(lobby.host.username);
    const challengeeTable = await eos.findPlayer(lobby.challengee.username);

    // Forgive me lord :D
    const hostDeckId = hostTable.rows[0].account.deck_id;
    const hostDeck = hostTable.rows[0].decks.find(
      ({id}: any) => hostDeckId === id
    );
    const hostGameDeck: any[] = [];
    let hostCardNum = 0;
    hostDeck.cards.forEach((card: any) => {
      if (card.amount > 1) {
        hostGameDeck.push({id: card.id, gid: hostCardNum});
        hostCardNum += 1;
        hostGameDeck.push({id: card.id, gid: hostCardNum});
        hostCardNum += 1;
      } else {
        hostGameDeck.push({id: card.id, gid: hostCardNum});
        hostCardNum += 1;
      }
    });
    const hostGameHand: any[] = [];


    // Amen
    console.log(hostGameDeck);

    const inserted = await mongo.db.collection("games").insertOne({
      gameId: lobbyId,
      playerA: {
        username: lobby.host.username,
        socketId: lobby.host.socketId,
        hand: [],
        deck: hostGameDeck,
        graveyard: [],
        field: {},
        hero: {}
      },
      playerB: {
        username: lobby.challengee.username,
        socketId: lobby.challengee.socketId,
        hand: [],
        deck: [],
        graveyard: [],
        field: {},
        hero: {}
      }
    });

    //inserted.ops[0];

    socket.emit("startGameSenderRes", {
      game: {
        gameId: lobbyId,
        
      }
    });
    io.to(lobby.challengee.socketId).emit("startGameReceiverRes");
  } catch (error) {
    console.error(error);
  }
};

export default startGame;