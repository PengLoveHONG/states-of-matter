import type {App} from "../../models/App";
import type {DeckCard} from "../../models/Player";

interface Params {
  cards: DeckCard[];
  public_key: string;
  signature: string;
}

const saveDeck = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;
  const {cards} = params;
  const trx = await eos.pushAction("savedeck", params);

  if (trx) { socket.emit("saveDeck", {cards}); }
};

export default saveDeck;