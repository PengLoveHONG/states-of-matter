import type {App} from "../../models/App";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const joinLobby = async (app: App, params: Params): Promise<void> => {
  const {eos, io, mongo} = app;
  const {lobby_id} = params;

  const trx = await eos.pushAction("joinlobby", params);

  if (!trx) { return; }

  const lobby = await eos.findLobby(lobby_id);

  if (!lobby) { return; }

  io.emit("joinLobbySender", {lobby});

  const {username} = lobby.host;
  const host = await mongo.findPlayer({username});

  if (!host || !host.socket_id) { return; }

  const {challengee} = lobby;
  const {socket_id} = host;

  io.emitTo(socket_id, "joinLobbyReceiver", {challengee});
};

export default joinLobby;