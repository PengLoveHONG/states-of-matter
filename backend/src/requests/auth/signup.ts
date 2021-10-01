import type {App} from "../../models/App";

interface Params {
  username: string;
  public_key: string;
  private_key_hash: string;
}

const signup = async (app: App, params: Params): Promise<void> => {
  const {eos, mongo, socket} = app;
  const {username, public_key, private_key_hash} = params;
  const trx = await eos.pushAction("signup", {username, public_key});

  if (!trx) { return; }

  const inserted = await mongo.insertPlayer({
    username,
    public_key,
    private_key_hash,
    socket_id: socket.id,
    signatures: {}
  });

  if (inserted) {
    socket.emit("notification", {msg: "Account created successfully."});
  }
};

export default signup;