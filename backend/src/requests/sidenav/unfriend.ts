import type {App} from "../../models/App";

interface Params {
  username: string;
  friendname: string;
  public_key: string;
  signature: string;
}

const unfriend = async (app: App, params: Params): Promise<void> => {
  const {eos, io, mongo} = app;
  const {username, friendname, public_key, signature} = params;

  const transaction = await eos.pushAction("unfriend", {
    friendname,
    public_key,
    signature
  });

  if (!transaction) { return; }

  const deleted = await mongo.deleteChat(username, friendname);

  if (!deleted) { return; }

  io.emit("unfriendSender", {friendname});
  const receiver = await mongo.findPlayer({username: friendname});

  if (!receiver || !receiver.socket_id) { return; }

  const {socket_id} = receiver;
  io.emitTo(socket_id, "unfriendReceiver", {username});
};

export default unfriend;