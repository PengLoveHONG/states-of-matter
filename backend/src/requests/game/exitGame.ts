import type {App} from "../../models/App";

interface Params {
  game_id: number;
  public_key: string;
  signature: string;
}

const exitGame = async (app: App, params: Params): Promise<void> => {
  const {eos, io, socket} = app;
  const {game_id} = params;

  try {
    const game = await eos.findGame(game_id);

    await eos.pushAction("endgame", params);

    const challengee = await eos.findPlayer(game.player_b);

    socket.emit("exitGameSenderRes");
    io.to(challengee.socketId).emit("exitGameReceiverRes");
  } catch (error) {
    console.error(error);
  }
};

export default exitGame;