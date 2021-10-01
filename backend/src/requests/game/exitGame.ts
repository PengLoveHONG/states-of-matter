import type {App} from "../../models/App";

interface Params {
  game_id: number;
  public_key: string;
  signature: string;
}

const exitGame = async (app: App, params: Params): Promise<void> => {
  const {eos, mongo, io, socket} = app;
  const {game_id} = params;
  const game = await eos.findGame(game_id);
  const trx = await eos.pushAction("endgame", params);

  if (game && trx) {
    const challengee = await mongo.findPlayer(game.player_b);

    if (!challengee) { return; }

    socket.emit("exitGameSender");
    io.to(challengee.socket_id).emit("exitGameReceiver");
  }
};

export default exitGame;