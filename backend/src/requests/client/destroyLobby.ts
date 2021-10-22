import type {App} from "../../models/App";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const destroyLobby = async (app: App, params: Params): Promise<void> => {
  const {eos, io, mongo} = app;
  const {lobby_id, public_key, signature} = params;

  const lobby = await eos.findLobby(lobby_id);

  if (!lobby) { return; }

  const trx = await eos.pushAction("destroylobby", {public_key, signature});

  if (!trx) { return; }

  io.emit("destroyLobbySender");

  const {username} = lobby.challengee;
  const challengeeMongo = await mongo.findPlayer({username});

  if (!challengeeMongo || !challengeeMongo.socket_id) { return; }

  const {socket_id} = challengeeMongo;
  io.emitTo(socket_id, "destroyLobbyReceiver");
};

export default destroyLobby;