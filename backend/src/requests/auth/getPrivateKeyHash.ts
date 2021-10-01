import type {App} from "../../models/App";

interface Params {username: string;}

const getPrivateKeyHash = async (app: App, params: Params): Promise<void> => {
  const {mongo, socket} = app;
  const player = await mongo.findPlayer(params.username);

  if (player) {
    const {private_key_hash} = player;
    socket.emit("getPrivateKeyHash", {private_key_hash});
  } else {
    socket.emit("notification", {msg: "Username not found."});
  }
};

export default getPrivateKeyHash;