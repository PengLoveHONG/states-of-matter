import type {Services} from "../../models/Services";

interface Params {
  public_key: string;
  signature: string;
}

const makeLobby = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io} = services;
  const {public_key, signature} = params;
  const lobby_id = Math.floor(Math.random() * 1000000000); // forgive me lord ;w;

  const trx = await blockchain.transact("makelobby", {lobby_id, public_key, signature});

  if (!trx) { return; }

  const lobby = await blockchain.findLobby(lobby_id);

  if (!lobby) { return; }

  io.emit("makeLobby", {lobby});
};

export default makeLobby;