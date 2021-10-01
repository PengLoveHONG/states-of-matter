import type {App} from "../../models/App";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const startGame = async (app: App, params: Params): Promise<void> => {
  const {eos, mongo, io, socket} = app;
  const {lobby_id} = params;
  const lobby = await eos.findLobby(lobby_id);
  const trx = await eos.pushAction("startgame", params);
  const game = await eos.findGame(lobby_id);

  if (lobby && trx && game) {
    const challengee = await mongo.findPlayer(lobby.challengee.username);

    if (!challengee) { return; }

    socket.emit("startGameSender", {game});
    io.to(challengee.socket_id).emit("startGameReceiver", {game});
  }
};

export default startGame;