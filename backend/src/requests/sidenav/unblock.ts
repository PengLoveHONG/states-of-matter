import type {Services} from "../../models/Services";

interface Params {
  friendname: string;
  public_key: string;
  signature: string;
}

const unblock = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io} = services;
  const {friendname} = params;
  const transaction = await blockchain.transact("unblckfriend", params);

  if (!transaction) { return; }

  io.emit("unblock", {friendname});
};

export default unblock;