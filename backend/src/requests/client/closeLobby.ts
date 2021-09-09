import type {App} from "../../models/App";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const closeLobby = async (app: App, params: Params): Promise<void> => {
  const {eos, io, socket} = app;
  const {lobby_id} = params;

  try {
    const lobby = await eos.findLobby(lobby_id);

    await eos.pushAction("destroylobby", params);

    socket.emit("closeLobbySenderRes");
    io.to(lobby.challengee.socket_id).emit("closeLobbyReceiverRes");
  } catch (error) {
    console.error(error);
  }
};

export default closeLobby;