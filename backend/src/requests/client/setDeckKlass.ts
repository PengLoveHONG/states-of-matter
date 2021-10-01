import type {App} from "../../models/App";

interface Params {
  id: number;
  klass: number;
  public_key: string;
  signature: string;
}

const setDeckKlass = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;
  const {id, klass} = params;
  const trx = await eos.pushAction("setdeckklass", params);

  if (trx) { socket.emit("setDeckKlass", {id, klass}); }
};

export default setDeckKlass;