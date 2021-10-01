import type {App} from "../../models/App";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const joinLobby = async (app: App, params: Params): Promise<void> => {
  const {eos, mongo, io, socket} = app;
  const {lobby_id} = params;
  const trx = await eos.pushAction("joinlobby", params);
  const lobby = await eos.findLobby(lobby_id);

  if (trx && lobby) {
    const {challengee} = lobby;
    const host = await mongo.findPlayer(lobby.host.username);

    if (!host) { return; }

    socket.emit("joinLobbySender", {lobby});
    io.to(host.socket_id).emit("joinLobbyReceiver", {challengee});
  }
};

export default joinLobby;