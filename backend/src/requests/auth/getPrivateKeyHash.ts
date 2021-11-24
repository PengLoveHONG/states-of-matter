import type {Services} from "../../models/Services"

interface Params {
  username: string;
}

const getPrivateKeyHash = async (services: Services, params: Params): Promise<void> => {
  const {io, mongo} = services;
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