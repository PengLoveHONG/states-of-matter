import type {Services} from "../../models/Services";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const destroyLobby = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io, mongo} = services;
  const {lobby_id, public_key, signature} = params;

  const lobby = await blockchain.findLobby(lobby_id);

  if (!lobby) { return; }

  const trx = await blockchain.transact("destroylobby", {public_key, signature});

  if (!trx) { return; }

  io.emit("destroyLobbySender");

  const {username} = lobby.challengee;
  const challengeeMongo = await mongo.findPlayer({username});

  if (!challengeeMongo || !challengeeMongo.socket_id) { return; }

  const {socket_id} = challengeeMongo;
  io.emitTo(socket_id, "destroyLobbyReceiver");
};

export default destroyLobby;