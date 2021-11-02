import type {App} from "../../models/App"

const disconnect = async (app: App): Promise<void> => {
  const {eos, io, mongo} = app;

  const {socket_id} = io;
  const playerMongo = await mongo.findAndUpdatePlayer({socket_id}, {
    socket_id: "",
    signatures: {signout: "", leaveLobby: ""}
  }, {returnDocument: "before"});

  if (!playerMongo.value) { return; }

  const {username, public_key} = playerMongo.value;
  const signature = playerMongo.value.signatures.signout;

  const trx = await eos.pushAction("signout", {username, public_key, signature});

  if (!trx) { return; }

  const player = await eos.findPlayer(username);

  if (!player) { return; }

  //Vukasin
  await eos.pushAction("leavelobby", { public_key, signature: playerMongo.value.signatures.leaveLobby });
  const lobby = await eos.findLobby(player.account.lobby_id);

  if (!lobby) { return; }

  const {username: hostUsername} = lobby.host;
  const hostMongo = await mongo.findPlayer({username: hostUsername});

  if (!hostMongo || !hostMongo.socket_id) { return; }

  const {socket_id: hostSocketId} = hostMongo;
  io.emitTo(hostSocketId, "leaveLobbyReceiver");
  //Vukasin

  const {friends} = player.social;
  const socket_ids = await mongo.getSocketIds(friends);

  if (!socket_ids) { return; }

  const {status} = player.account;
  io.emitTo(socket_ids, "updateFriend", {username, status});
};

export default disconnect;