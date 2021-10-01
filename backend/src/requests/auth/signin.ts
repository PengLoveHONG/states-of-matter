import type {App} from "../../models/App";

interface Params {
  username: string;
  public_key: string;
  signature: string;
  signatures: { signature: string; }
}

const signin = async (app: App, params: Params): Promise<void> => {
  const {eos, mongo, socket} = app;
  const {username, signatures} = params;
  const friends = [];
  const socket_id = socket.id;
  let lobby;
  let game;

  const [trx, updated] = await Promise.all([
    eos.pushAction("signin", params),
    mongo.updatePlayer(username, {socket_id, signatures})
  ]);

  if (!trx || !updated) { return; }

  const player = await eos.findPlayer(username);

  if (!player) { return; }

  for (const friendname of player.social.friends) {
    const [friendEos, chat] = await Promise.all([
      eos.findPlayer(friendname),
      mongo.findChat(username, friendname)
    ]);

    if (!friendEos || !chat) { return; }

    const {status, avatar_id} = friendEos.account;
    const {messages} = chat;

    friends.push({username: friendname, status, avatar_id, messages});
  }

  if (player.account.lobby_id) {
    lobby = await eos.findLobby(player.account.lobby_id);

    if (!lobby) { return; }
  } else if (player.account.game_id) {
    game = await eos.findGame(player.account.game_id);

    if (!game) { return; }
  }

  socket.emit("signin", {player, friends, lobby, game});
};

export default signin;