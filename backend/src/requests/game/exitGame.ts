import type {App} from "../../models/App";
import {status} from "../../models/Player";

interface Params {
  gameId: string;
}

const exitGame = async (app: App, params: Params): Promise<void> => {
  try {
    const {io, mongo, socket} = app;
    const {gameId} = params;

    const lobby = await mongo.db.collection("lobbies").findOne({
      gameId: parseInt(gameId)
    });

    await mongo.db.collection("players").updateOne({
      username: lobby.host.username
    }, {
      $set: {
        "account.status": status.ONLINE
      }
    });

    await mongo.db.collection("players").updateOne({
      username: lobby.challengee.username
    }, {
      $set: {
        "account.status": status.ONLINE
      }
    });

    socket.emit("exitGameSenderRes");
    io.to(lobby.challengee.socketId).emit("exitGameReceiverRes");
  } catch (error) {
    console.error(error);
  }
};

export default exitGame;