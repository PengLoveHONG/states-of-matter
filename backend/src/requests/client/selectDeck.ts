import type {Services} from "../../models/Services";

interface Params {
  deck_id: number;
  public_key: string;
  signature: string;
}

const selectDeck = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io} = services;
  const {deck_id} = params;
  const trx = await blockchain.transact("selectdeck", params);

  if (!trx) { return; }

  io.emit("selectDeck", {deck_id});
};

export default selectDeck;