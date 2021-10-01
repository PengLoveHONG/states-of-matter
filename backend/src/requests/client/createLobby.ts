import type {App} from "../../models/App";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const createLobby = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;
  const trx = await eos.pushAction("makelobby", params);
  const lobby = await eos.findLobby(params.lobby_id);

  if (trx && lobby) { socket.emit("createLobby", {lobby}); }
};

export default createLobby;