import type {App} from "../../models/App";

interface Params {
  game_id: number;
  public_key: string;
  signature: string;
}

const exitGame = async (app: App, params: Params): Promise<void> => {
  const {eos, io, mongo} = app;
  const {game_id} = params;

  const game = await eos.findGame(game_id);

  if (!game) { return; }

  const trx = await eos.pushAction("endgame", params);

  if (!trx) { return; }

  io.emit("exitGameSender");

  // const username = game.player_b;
  // const challengee = await mongo.findPlayer({username});

  // if (!challengee || !challengee.socket_id) { return; }

  // io.emitTo(challengee.socket_id, "exitGameReceiver");
};

export default exitGame;