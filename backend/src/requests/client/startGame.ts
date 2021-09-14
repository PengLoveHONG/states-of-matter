import type {App} from "../../models/App";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const startGame = async (app: App, params: Params): Promise<void> => {
  const {eos, io, socket} = app;
  const {lobby_id} = params;

  try {
    const lobby = await eos.findLobby(lobby_id);
    await eos.pushAction("startgame", params);

    socket.emit("startGameSenderRes");
    io.to(lobby.challengee.socket_id).emit("startGameReceiverRes");
  } catch (error) {
    console.error(error);
  }
};

export default startGame;