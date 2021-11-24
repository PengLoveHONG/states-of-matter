import type {Services} from "../../models/Services";

interface Params {
  username: string;
  public_key: string;
  signature: string;
}

const declineFriend = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io} = services;
  const {username} = params;

  const transaction = await blockchain.transact("declfriend", params);

  if (!transaction) { return; }

  io.emit("declineFriend", {username});
};

export default declineFriend;