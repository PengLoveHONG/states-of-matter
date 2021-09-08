import {RpcError} from "eosjs";
import type {App} from "../../models/App";

interface Params {
  username: string;
  public_key: string;
  private_key_hash: string;
}

const signup = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;

  try {
    await eos.pushAction("signup", params);
    socket.emit("notificationRes", {msg: "Account created successfully."});
  } catch (error) {
    console.log("========== signup() ==========");
    console.log("");
    console.table(JSON.stringify(error));
    console.log("");
    console.log("========== signup() ==========");
  }
};

export default signup;