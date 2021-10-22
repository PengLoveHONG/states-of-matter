import type {App} from "../../models/App";

interface Params {
  avatar_id: number;
  username: string;
  public_key: string;
  signature: string;
}

const setAvatar = async (app: App, params: Params): Promise<void> => {
  const {eos, io, mongo} = app;
  const {avatar_id, username, public_key, signature} = params;

  const [trx, player] = await Promise.all([
    eos.pushAction("setavatar", {avatar_id, public_key, signature}),
    eos.findPlayer(username)
  ]);

  if (!trx || !player) { return; }

  io.emit("setAvatarSender", {avatar_id});
  const socket_ids = await mongo.getSocketIds(player.social.friends);

  if (!socket_ids) { return; }

  io.emitTo(socket_ids, "setAvatarReceiver", {username, avatar_id});
};

export default setAvatar;