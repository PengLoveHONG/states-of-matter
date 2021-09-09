import type {App} from "../../models/App";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const exitLobby = async (app: App, params: Params): Promise<void> => {
  const {eos, io, socket} = app;
  const {lobby_id} = params;

  try {
    await eos.pushAction("leavelobby", params);

    const lobby = await eos.findLobby(lobby_id);

    socket.emit("exitLobbySenderRes");
    io.to(lobby.host.socket_id).emit("exitLobbyReceiverRes");
  } catch (error) {
    console.error(error);
  }
};

export default exitLobby;