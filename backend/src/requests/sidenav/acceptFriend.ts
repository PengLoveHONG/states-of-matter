import type {App} from "../../models/App";

interface Params {
  friendname: string;
  username: string;
  public_key: string;
  signature: string;
}

const acceptFriend = async (app: App, params: Params): Promise<void> => {
  const {eos, mongo, io, socket} = app;
  const {friendname, username, public_key, signature} = params;

  const trx = await eos.pushAction("acceptfriend", {friendname, public_key, signature});

  if (!trx) { return; }

  const [sender, receiver, receiverMongo, inserted] = await Promise.all([
    eos.findPlayer(params.username),
    eos.findPlayer(params.friendname),
    mongo.findPlayer(params.friendname),
    mongo.insertChat(username, friendname)
  ]);

  if (!sender || !receiver || !receiverMongo || !inserted) { return; }

  socket.emit("acceptFriendSender", {
    username: params.friendname,
    avatarId: receiver.account.avatar_id,
    status: receiver.account.status
  });

  io.to(receiverMongo.socket_id).emit("acceptFriendReceiver", {
    username: params.username,
    avatarId: sender.account.avatar_id,
    status: sender.account.status
  });
};

export default acceptFriend;