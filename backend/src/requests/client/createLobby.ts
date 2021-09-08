import type {App} from "../../models/App";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const createLobby = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;
  const {lobby_id, public_key, signature} = params;

  try {
    await eos.pushAction("makelobby", params);
    const lobby = eos.findLobby(lobby_id);
    socket.emit("createLobbyRes", {lobby});
  } catch (error) {
    console.error(error);
  }
};

export default createLobby;