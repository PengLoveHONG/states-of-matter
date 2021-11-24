import type {Services} from "../../models/Services";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const leaveLobby = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io, mongo} = services;
  const {lobby_id, public_key, signature} = params;

  const trx = await blockchain.transact("leavelobby", {public_key, signature});

  if (!trx) { return; }

  const lobby = await blockchain.findLobby(lobby_id);

  if (!lobby) { return; }

  io.emit("leaveLobbySender");

  const {username} = lobby.host;
  const hostMongo = await mongo.findPlayer({username});

  if (!hostMongo || !hostMongo.socket_id) { return; }

  const {socket_id} = hostMongo;
  io.emitTo(socket_id, "leaveLobbyReceiver");
};

export default leaveLobby;