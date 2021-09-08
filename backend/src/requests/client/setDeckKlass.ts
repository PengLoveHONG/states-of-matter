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

  try {
    await eos.pushAction("setdeckklass", params);
    socket.emit("setDeckKlassRes", {id, klass});
  } catch (error) {
    console.error(error);
  }
};

export default setDeckKlass;