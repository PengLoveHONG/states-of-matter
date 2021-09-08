import type {App} from "../../models/App";
import type {Player} from "../../models/Player";

interface Params {
  username: string;
  public_key: string;
  signature: string;
}

const signin = async (app: App, params: Params): Promise<void> => {
  const {eos, mongo, socket} = app;
  const {username} = params;

  try {
    const friends = [];
    const socket_id = socket.id;

    await eos.pushAction("signin", {socket_id, ...params});

    const player: Player = await eos.findPlayer(username);

    let lobby;
    let game;

    if (player) {
      for (const friendname of player.social.friends) {
        const friend = await eos.findPlayer(friendname);

        if (friend) {
          const chat = await mongo.db.collection("chats").findOne({
            players: {$all: [username, friendname]}
          });

          const {status, socket_id, avatar_id} = friend.account;
          const {messages} = chat;

          friends.push({
            username: friendname,
            status,
            socketId: socket_id,
            avatarId: avatar_id,
            messages
          });
        }
      }

      if (player.account.lobby_id) {
        lobby = await eos.findLobby(player.account.lobby_id);
      } else if (player.account.game_id) {
        game = await mongo.db.collection("games").findOne({
          gameId: player.account.game_id
        });
      }
    }

    socket.emit("signinRes", {player, friends, lobby, game});
  } catch (error) {
    console.error(error);
  }
};

export default signin;