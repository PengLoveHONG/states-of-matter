import type {App} from "../../models/App";

// never forgetti code spaghetti ;w;
const disconnect = async (app: App): Promise<void> => {
  const {eos, mongo, io, socket} = app;

  const playerMongo = await mongo.spagete(socket.id, {
    socket_id: "",
    signatures: {}
  }, {returnDocument: "before"});

  if (!playerMongo.value) { return; }

  const player = await eos.findPlayer(playerMongo.value.username);

  if (player) {
    const {username, public_key} = player;
    const signature = playerMongo.value.signatures.signout;

    const trx = await eos.pushAction("signout", {username, public_key, signature});

    if (!trx) { return; }

    const socket_ids = await mongo.getSocketIds(player.social.friends);

    socket_ids?.forEach((socket_id) => {
      io.to(socket_id).emit("updateFriend", {username, status: 0});
    });
  }
};

export default disconnect;