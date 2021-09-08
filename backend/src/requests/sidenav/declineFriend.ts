import type {App} from "../../models/App";

interface Params {
  username: string;
  public_key: string;
  signature: string;
}

const declineFriend = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;
  const {username} = params;

  try {
    await eos.pushAction("declfriend", params);
    socket.emit("declineFriendRes", {username});
  } catch (error) {
    console.error(error);
  }
};

export default declineFriend;