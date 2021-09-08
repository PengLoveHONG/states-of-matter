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

  try {
    await eos.pushAction("savedeck", params);
    socket.emit("saveDeckRes", {cards});
  } catch (error) {
    console.error(error);
  }
};

export default saveDeck;