import type {App} from "../../models/App";

interface Params {
  friendname: string;
  public_key: string;
  signature: string;
}

const unblock = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;
  const {friendname} = params;

  try {
    await eos.pushAction("unblckfriend", params);
    socket.emit("unblockRes", {friendname});
  } catch (error) {
    console.error(error);
  }
};

export default unblock;