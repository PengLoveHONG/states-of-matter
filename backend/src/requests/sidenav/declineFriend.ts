import type {App} from "../../models/App";

interface Params {
  username: string;
  public_key: string;
  signature: string;
}

const declineFriend = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;
  const {username} = params;
  const trx = await eos.pushAction("declfriend", params);

  if (trx) { socket.emit("declineFriend", {username}); }
};

export default declineFriend;