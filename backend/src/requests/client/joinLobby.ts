import type {Services} from "../../models/Services";

interface Params {
  lobby_id: number;
  public_key: string;
  signature: string;
}

const joinLobby = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io, mongo} = services;
  const {lobby_id} = params;

  const trx = await blockchain.transact("joinlobby", params);

  if (!trx) { return; }

  const lobby = await blockchain.findLobby(lobby_id);

  if (!lobby) { return; }

  io.emit("joinLobbySender", {lobby});

  const {username} = lobby.host;
  const host = await mongo.findPlayer({username});

  if (!host || !host.socket_id) { return; }

  const {challengee} = lobby;
  const {socket_id} = host;

  io.emitTo(socket_id, "joinLobbyReceiver", {challengee});
};

export default joinLobby;