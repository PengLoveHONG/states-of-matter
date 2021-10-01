import type {App} from "../../models/App";

interface Params {
  username: string;
  friendname: string;
  public_key: string;
  signature: string;
}

const unfriend = async (app: App, params: Params): Promise<void> => {
  const {eos, socket, io, mongo} = app;
  const {username, friendname, public_key, signature} = params;

  const trx = await eos.pushAction("unfriend", {friendname, public_key, signature});

  if (!trx) { return; }

  const del = await mongo.deleteChat(username, friendname);

  if (!del) { return; }

  const receiver = await mongo.findPlayer(friendname);

  if (!receiver) { return; }

  socket.emit("unfriendSender", {friendname});

  if (receiver.socket_id) {
    io.to(receiver.socket_id).emit("unfriendReceiver", {username});
  }
};

export default unfriend;