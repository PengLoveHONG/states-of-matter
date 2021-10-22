import type {App} from "../../models/App";

interface Params {
  username: string;
  public_key: string;
  signature: string;
}

const declineFriend = async (app: App, params: Params): Promise<void> => {
  const {eos, io} = app;
  const {username} = params;

  const transaction = await eos.pushAction("declfriend", params);

  if (!transaction) { return; }

  io.emit("declineFriend", {username});
};

export default declineFriend;