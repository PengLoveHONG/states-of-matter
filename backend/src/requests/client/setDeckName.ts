import type {App} from "../../models/App";

interface Params {
  id: number;
  name: string;
  public_key: string;
  signature: string;
}

const setDeckName = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;
  const {id, name} = params;
  const trx = await eos.pushAction("setdeckname", params);

  if (trx) { socket.emit("setDeckName", {id, name}); }
};

export default setDeckName;