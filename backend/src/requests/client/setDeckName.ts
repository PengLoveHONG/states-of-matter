import type {App} from "../../models/App";

interface Params {
  id: number;
  name: string;
  public_key: string;
  signature: string;
}

const setDeckName = async (app: App, params: Params): Promise<void> => {
  const {eos, io} = app;
  const {id, name} = params;

  const transaction = await eos.pushAction("setdeckname", params);

  if (!transaction) { return; }

  io.emit("setDeckName", {id, name});
};

export default setDeckName;