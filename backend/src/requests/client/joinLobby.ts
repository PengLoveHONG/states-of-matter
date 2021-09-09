import type {App} from "../../models/App";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const joinLobby = async (app: App, params: Params): Promise<void> => {
  const {eos, io, socket} = app;
  const {lobby_id} = params;

  try {
    await eos.pushAction("joinlobby", params);

    const lobby = await eos.findLobby(lobby_id);

    socket.emit("joinLobbySenderRes", {lobby});

    io.to(lobby.host.socket_id).emit("joinLobbyReceiverRes", {
      challengee: lobby.challengee
    });
  } catch (error) {
    console.error(error);
  }
};

export default joinLobby;