import type {Services} from "../../models/Services";
import type {DeckCard} from "../../models/Player";

interface Params {
  cards: DeckCard[];
  public_key: string;
  signature: string;
}

const saveDeck = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io} = services;
  const {cards} = params;
  const trx = await blockchain.transact("savedeck", params);

  if (!trx) { return; }

  io.emit("saveDeck", {cards});
};

export default saveDeck;