import type {Services} from "../../models/Services";

interface Params {
  username: string;
  friendname: string;
  public_key: string;
  signature: string;
}

const block = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io, mongo} = services;
  const {username, friendname, public_key, signature} = params;

  const transaction = await blockchain.transact("blockfriend", {
    friendname,
    public_key,
    signature
  });

  if (!transaction) { return; }

  const deleted = await mongo.deleteChat(username, friendname);

  if (!deleted) { return; }

  io.emit("blockSender", {friendname});
  const receiver = await mongo.findPlayer({username: friendname});

  if (!receiver || !receiver.socket_id) { return; }

  const {socket_id} = receiver;
  io.emitTo(socket_id, "blockReceiver", {username});
};

export default block;