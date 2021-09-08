import type {App} from "../../models/App";

interface Params {
  deck_id: number;
  public_key: string;
  signature: string;
}

const selectDeck = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;
  const {deck_id} = params;

  try {
    await eos.pushAction("selectdeck", params);
    socket.emit("selectDeckRes", {deck_id});
  } catch (error) {
    console.error(error);
  }
};

export default selectDeck;