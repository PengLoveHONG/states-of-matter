import type {App} from "../../models/App";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const closeLobby = async (app: App, params: Params): Promise<void> => {
  const {eos, mongo, io, socket} = app;
  const lobby = await eos.findLobby(params.lobby_id);
  const trx = await eos.pushAction("destroylobby", params);

  if (lobby && trx) {
    const challengee = await mongo.findPlayer(lobby.challengee.username);

    if (!challengee) { return; }

    socket.emit("closeLobbySender");
    io.to(challengee.socket_id).emit("closeLobbyReceiver");
  }
};

export default closeLobby;