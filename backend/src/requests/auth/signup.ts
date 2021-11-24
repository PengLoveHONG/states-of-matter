import type {Services} from "../../models/Services";

interface Params {
  username: string;
  public_key: string;
  private_key_hash: string;
}

const signup = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io, mongo} = services;
  const {username, public_key, private_key_hash} = params;

  const trx = await blockchain.transact("signup", {username, public_key});

  if (!trx) { return; }

  const {socket_id} = io;
  const insert = await mongo.insertPlayer({
    socket_id,
    username,
    public_key,
    private_key_hash,
    signatures: {signout: "", leaveLobby: ""}
  });

  if (!insert.acknowledged) { return; }

  io.emit("notification", {msg: "Account created successfully."});
};

export default signup;