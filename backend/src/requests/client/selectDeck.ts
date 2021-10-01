import type {App} from "../../models/App";

interface Params {
  deck_id: number;
  public_key: string;
  signature: string;
}

const selectDeck = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;
  const {deck_id} = params;
  const trx = await eos.pushAction("selectdeck", params);

  if (trx) { socket.emit("selectDeck", {deck_id}); }
};

export default selectDeck;