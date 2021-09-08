import type {App} from "../../models/App";
import {status} from "../../models/Player";

interface Params {
  lobbyId: number;
  username: string;
}

const exitLobby = async (app: App, params: Params): Promise<void> => {
  try {
    const {io, mongo, socket} = app;
    const {lobbyId, username} = params;

    const updatedLobby = await mongo.db.collection("lobbies").findOneAndUpdate(
      {lobbyId},
      {
        $set: {
          challengee: {}
        }
      },
      {returnDocument: "after"}
    );
    const lobby = updatedLobby.value;

    await mongo.db.collection("players").updateOne(
      {username},
      {
        $set: {
          "account.status": status.ONLINE,
          "account.lobbyId": 0
        }
      }
    );

    socket.emit("exitLobbySenderRes");
    io.to(lobby.host.socketId).emit("exitLobbyReceiverRes");
  } catch (error) {
    console.error(error);
  }
};

export default exitLobby;