import type {Services} from "../../models/Services";

interface Params {
  id: number;
  name: string;
  public_key: string;
  signature: string;
}

const setDeckName = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io} = services;
  const {id, name} = params;
  const transaction = await blockchain.transact("setdeckname", params);

  if (!transaction) { return; }

  io.emit("setDeckName", {id, name});
};

export default setDeckName;