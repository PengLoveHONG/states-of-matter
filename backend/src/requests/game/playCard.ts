import type {Services} from "../../models/Services";

interface Params {
  field: string;
  gid: number;
  id: number;
  public_key: string;
  signature: string;
}

const playCard = async (services: Services, params: Params): Promise<void> => {
  const {blockchain} = services;
  const transaction = await blockchain.transact("playcard", params);

  if (!transaction) { return; }
};

export default playCard;