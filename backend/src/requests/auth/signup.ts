import type {App} from "../../models/App";

interface Params {
  username: string;
  public_key: string;
  private_key_hash: string;
}

const signup = async (app: App, params: Params): Promise<void> => {
  const {eos, io, mongo} = app;
  const {username, public_key, private_key_hash} = params;

  const trx = await eos.pushAction("signup", {username, public_key});

  if (!trx) { return; }

  const {socket_id} = io;
  const insert = await mongo.insertPlayer({
    socket_id,
    username,
    public_key,
    private_key_hash,
    signatures: {signout: ""}
  });

  if (!insert.acknowledged) { return; }

  io.emit("notification", {msg: "Account created successfully."});
};

export default signup;