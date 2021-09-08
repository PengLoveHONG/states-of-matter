import type {App} from "../../models/App";

interface Params {
  username: string;
  friendname: string;
  friendSocketId: string;
  public_key: string;
  signature: string;
}

const block = async (app: App, params: Params): Promise<void> => {
  const {eos, socket, io, mongo} = app;
  const {username, friendname, friendSocketId, public_key, signature} = params;

  try {
    await eos.pushAction("blockfriend", {friendname, public_key, signature});
    await mongo.deleteChat(username, friendname);
    socket.emit("blockSenderRes", {friendname});

    if (friendSocketId) {
      io.to(friendSocketId).emit("blockReceiverRes", {username});
    }
  } catch (error) {
    console.error(error);
  }
};

export default block;