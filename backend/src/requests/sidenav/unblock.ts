import type {App} from "../../models/App";

interface Params {
  friendname: string;
  public_key: string;
  signature: string;
}

const unblock = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;
  const {friendname} = params;
  const trx = await eos.pushAction("unblckfriend", params);

  if (trx) { socket.emit("unblock", {friendname}); }
};

export default unblock;