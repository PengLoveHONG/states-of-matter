import type {App} from "../../models/App";

interface Params {
  username: string;
  status: number;
}

const updateFriend = async (app: App, params: Params): Promise<void> => {
  const {eos, mongo, io} = app;
  const {username, status} = params;
  const player = await eos.findPlayer(username);

  if (!player) { return; }

  const socket_ids = await mongo.getSocketIds(player.social.friends);

  socket_ids?.forEach((socket_id) => {
    io.to(socket_id).emit("updateFriend", {username, status});
  });
};

export default updateFriend;