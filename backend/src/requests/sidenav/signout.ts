import type {App} from "../../models/App";
import {status} from "../../models/Player";

interface Params {
  username: string;
}

const signout = async (app: App, params: Params): Promise<void> => {
  try {
    const {mongo} = app;
    const {username} = params;

    await mongo.db.collection("players").updateOne({username}, {
      $set: {
        "account.socketId": "",
        "account.status": status.OFFLINE
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export default signout;