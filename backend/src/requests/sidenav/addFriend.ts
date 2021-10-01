import type {App} from "../../models/App";

interface Params {
  username: string;
  friendname: string;
  public_key: string;
  signature: string;
}

const addFriend = async (app: App, params: Params): Promise<void> => {
  const {eos, mongo, io, socket} = app;
  const {username, friendname, public_key, signature} = params;
  const trx = await eos.pushAction("addfriend", {friendname, public_key, signature});

  if (!trx) { return; }

  const friend = await mongo.findPlayer(friendname);

  if (!friend) { return; }

  socket.emit("notification", {msg: "Friend request sent."});

  if (friend.socket_id) {
    io.to(friend.socket_id).emit("addFriend", {username});
  }
};

export default addFriend;