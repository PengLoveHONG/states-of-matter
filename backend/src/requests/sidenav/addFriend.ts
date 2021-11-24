import type {Services} from "../../models/Services";

interface Params {
  username: string;
  friendname: string;
  public_key: string;
  signature: string;
}

const addFriend = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io, mongo} = services;
  const {username, friendname, public_key, signature} = params;

  const transaction = await blockchain.transact("addfriend", {
    friendname,
    public_key,
    signature
  });

  if (!transaction) { return; }

  io.notification("Friend request sent.");

  const friend = await mongo.findPlayer({username: friendname});

  if (!friend || !friend.socket_id) { return; }

  const {socket_id} = friend;
  io.emitTo(socket_id, "addFriend", {username});
};

export default addFriend;