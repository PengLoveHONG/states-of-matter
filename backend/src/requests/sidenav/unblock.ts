import type {App} from "../../models/App";

interface Params {
  friendname: string;
  public_key: string;
  signature: string;
}

const unblock = async (app: App, params: Params): Promise<void> => {
  const {eos, io} = app;
  const {friendname} = params;

  const transaction = await eos.pushAction("unblckfriend", params);

  if (!transaction) { return; }

  io.emit("unblock", {friendname});
};

export default unblock;