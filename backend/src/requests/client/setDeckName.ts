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

  try {
    await eos.pushAction("setdeckname", params);
    socket.emit("setDeckNameRes", {id, name});
  } catch (error) {
    console.error(error);
  }
};

export default setDeckName;