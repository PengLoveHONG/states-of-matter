import type {App} from "../../models/App";

interface Params {
  friendname: string;
  public_key: string;
  signature: string;
}

const addFriend = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;

  try {
    await eos.pushAction("addfriend", params);

    socket.emit("notificationRes", {msg: "Friend request sent."});
  } catch (error) {
    console.error(error);
  }
};

export default addFriend;