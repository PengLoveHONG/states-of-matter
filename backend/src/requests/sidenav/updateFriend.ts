import type {App} from "../../models/App";

interface Params { username: string; }

const updateFriend = async (app: App, params: Params): Promise<void> => {
  const {eos, mongo, io} = app;
  const {username} = params;

  const player = await eos.findPlayer(username);

  if (!player) { return; }

  const {account: {status}} = player;
  const socket_ids = await mongo.getSocketIds(player.social.friends);

  if (!socket_ids) { return; }

  io.emitTo(socket_ids, "updateFriend", {username, status});
};

export default updateFriend;