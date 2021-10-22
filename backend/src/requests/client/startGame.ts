import type {App} from "../../models/App";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const startGame = async (app: App, params: Params): Promise<void> => {
  const {eos, io, mongo} = app;
  const {lobby_id} = params;

  const lobby = await eos.findLobby(lobby_id);

  if (!lobby) { return; }

  const transaction = await eos.pushAction("startgame", params);

  if (!transaction) { return; }

  const game = await eos.findGame(lobby_id);

  if (!game) { return; }

  io.emit("startGameSender", {game});

  const {username} = lobby.challengee;
  const challengee = await mongo.findPlayer({username});

  if (!challengee || !challengee.socket_id) { return; }

  const {socket_id} = challengee;
  io.emitTo(socket_id, "startGameReceiver", {game});
};

export default startGame;