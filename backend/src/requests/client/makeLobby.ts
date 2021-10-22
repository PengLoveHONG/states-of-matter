import type {App} from "../../models/App";

interface Params {
  public_key: string;
  signature: string;
}

const makeLobby = async (app: App, params: Params): Promise<void> => {
  const {eos, io} = app;
  const {public_key, signature} = params;
  const lobby_id = Math.floor(Math.random() * 1000000000); // forgive me lord ;w;

  const trx = await eos.pushAction("makelobby", {lobby_id, public_key, signature});

  if (!trx) { return; }

  const lobby = await eos.findLobby(lobby_id);

  if (!lobby) { return; }

  io.emit("makeLobby", {lobby});
};

export default makeLobby;