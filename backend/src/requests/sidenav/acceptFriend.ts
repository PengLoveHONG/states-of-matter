import type {Services} from "../../models/Services";

interface Params {
  friendname: string;
  username: string;
  public_key: string;
  signature: string;
}

const acceptFriend = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io, mongo} = services;
  const {friendname, username, public_key, signature} = params;

  const trx = await blockchain.transact("acceptfriend", {friendname, public_key, signature});

  if (!trx) { return; }

  const [sender, receiver, receiverMongo, inserted] = await Promise.all([
    blockchain.findPlayer(params.username),
    blockchain.findPlayer(params.friendname),
    mongo.findPlayer({username: params.friendname}),
    mongo.insertChat(username, friendname)
  ]);

  if (!sender || !receiver || !receiverMongo || !inserted) { return; }

  io.emit("acceptFriendSender", {
    username: params.friendname,
    avatar_id: receiver.account.avatar_id,
    status: receiver.account.status
  });

  io.emitTo(receiverMongo.socket_id, "acceptFriendReceiver", {
    username: params.username,
    avatar_id: sender.account.avatar_id,
    status: sender.account.status
  });
};

export default acceptFriend;