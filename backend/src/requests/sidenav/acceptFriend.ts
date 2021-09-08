import type {App} from "../../models/App";

interface Params {
  friendname: string;
  friendSocketId: string;
  username: string;
  public_key: string;
  signature: string;
}

const acceptFriend = async (app: App, params: Params): Promise<void> => {
  const {eos, io, mongo, socket} = app;
  const {friendname, friendSocketId, username, public_key, signature} = params;

  try {
    await eos.pushAction("acceptfriend", {friendname, public_key, signature});

    const sender = await eos.findPlayer(params.username);
    const receiver = await eos.findPlayer(params.friendname);

    await mongo.db.collection("chats").insertOne({
      players: [friendname, username],
      messages: []
    });

    socket.emit("acceptFriendSenderRes", {
      username: params.friendname,
      avatarId: receiver.account.avatar_id,
      status: receiver.account.status
    });

    if (friendSocketId) {
      io.to(friendSocketId).emit("acceptFriendReceiverRes", {
        username: params.username,
        avatarId: sender.account.avatar_id,
        status: sender.account.status
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export default acceptFriend;