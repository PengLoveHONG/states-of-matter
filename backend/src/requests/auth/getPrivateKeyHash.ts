import type {App} from "../../models/App";

interface Params { username: string; }

const getPrivateKeyHash = async (app: App, params: Params): Promise<void> => {
  try {
    const {eos, socket} = app;
    const {username} = params;

    const player = await eos.findPlayer(username);

    if (player) {
      const {private_key_hash} = player;
      socket.emit("getPrivateKeyHashRes", {private_key_hash});
    } else {
      socket.emit("notificationRes", {msg: "Username not found."});
    }
  } catch (error) {
    console.error(error);
  }
};

export default getPrivateKeyHash;