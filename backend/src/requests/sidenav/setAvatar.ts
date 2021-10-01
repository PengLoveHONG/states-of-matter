import type {App} from "../../models/App";

interface Params {
  avatar_id: number;
  username: string;
  public_key: string;
  signature: string;
}

const setAvatar = async (app: App, params: Params): Promise<void> => {
  const {eos, mongo, io, socket} = app;
  const {avatar_id, username, public_key, signature} = params;
  const trx = await eos.pushAction("setavatar", {avatar_id, public_key, signature});

  if (trx) {
    const player = await eos.findPlayer(username);

    if (!player) { return; }

    const socketIds = await mongo.getSocketIds(player.social.friends);
    socket.emit("setAvatarSender", {avatar_id});

    socketIds?.forEach((id) => {
      io.to(id).emit("setAvatarReceiver", {username, avatar_id});
    });
  }
};

export default setAvatar;