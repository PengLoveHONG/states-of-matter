import type {App} from "../../models/App"

interface Params {
  username: string;
}

const getPrivateKeyHash = async (app: App, params: Params): Promise<void> => {
  const {io, mongo} = app;
  const {username} = params;
  const player = await mongo.findPlayer({username});

  if (!player) {
    io.notification("Username not found.");
    return;
  }

  const {private_key_hash} = player;
  io.emit("getPrivateKeyHash", {private_key_hash});
};

export default getPrivateKeyHash;