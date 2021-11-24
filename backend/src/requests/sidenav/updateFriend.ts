import type {Services} from "../../models/Services";

interface Params { username: string; }

const updateFriend = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, mongo, io} = services;
  const {username} = params;

  const player = await blockchain.findPlayer(username);

  if (!player) { return; }

  const {account: {status}} = player;
  const socket_ids = await mongo.getSocketIds(player.social.friends);

  if (!socket_ids) { return; }

  io.emitTo(socket_ids, "updateFriend", {username, status});
};

export default updateFriend;