import type {App} from "../../models/App";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const exitLobby = async (app: App, params: Params): Promise<void> => {
  const {eos, mongo, io, socket} = app;
  const {lobby_id} = params;
  const trx = await eos.pushAction("leavelobby", params);
  const lobby = await eos.findLobby(lobby_id);

  if (trx && lobby) {
    const host = await mongo.findPlayer(lobby.host.username);

    if (!host) { return; }

    socket.emit("exitLobbySender");
    io.to(host.socket_id).emit("exitLobbyReceiver");
  }
};

export default exitLobby;