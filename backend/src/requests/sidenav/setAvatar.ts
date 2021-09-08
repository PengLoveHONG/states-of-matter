import type {App} from "../../models/App";

interface Params {
  friendIds: Array<string>;
  avatar_id: number;
  username: string;
  public_key: string;
  signature: string;
}

const setAvatar = async (app: App, params: Params): Promise<void> => {
  const {eos, io, socket} = app;
  const {friendIds, avatar_id, username, public_key, signature} = params;

  try {
    await eos.pushAction("setavatar", {avatar_id, public_key, signature});
    socket.emit("setAvatarSenderRes", {avatar_id});

    friendIds.forEach((friendId) => {
      io.to(friendId).emit("setAvatarReceiverRes", {username, avatar_id});
    });
  } catch (error) {
    console.error(error);
  }
};

export default setAvatar;