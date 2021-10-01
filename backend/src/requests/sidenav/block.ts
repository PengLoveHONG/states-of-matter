import type {App} from "../../models/App";

interface Params {
  username: string;
  friendname: string;
  public_key: string;
  signature: string;
}

const block = async (app: App, params: Params): Promise<void> => {
  const {eos, socket, io, mongo} = app;
  const {username, friendname, public_key, signature} = params;
  const trx = await eos.pushAction("blockfriend", {friendname, public_key, signature});

  if (!trx) { return; }

  const del = await mongo.deleteChat(username, friendname);

  if (del) {
    const receiver = await mongo.findPlayer(friendname);

    if (!receiver) { return; }

    socket.emit("blockSender", {friendname});

    if (receiver.socket_id) {
      io.to(receiver.socket_id).emit("blockReceiver", {username});
    }
  }
};

export default block;