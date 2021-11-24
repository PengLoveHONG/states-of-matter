import type {Services} from "../../models/Services";

interface Params {
  game_id: number;
  public_key: string;
  signature: string;
}

const exitGame = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io, mongo} = services;
  const {game_id} = params;

  const game = await blockchain.findGame(game_id);

  if (!game) { return; }

  const trx = await blockchain.transact("endgame", params);

  if (!trx) { return; }

  io.emit("exitGameSender");

  // const username = game.player_b;
  // const challengee = await mongo.findPlayer({username});

  // if (!challengee || !challengee.socket_id) { return; }

  // io.emitTo(challengee.socket_id, "exitGameReceiver");
};

export default exitGame;