import type {App} from "../../models/App";
import {status} from "../../models/Player";

const joinLobby = async (app: App, params: any): Promise<void> => {
  try {
    const {io, mongo, socket} = app;
    const {lobbyId, username, bound, socketId, avatarId} = params;

    const lobby = await mongo.db.collection("lobbies").findOne({lobbyId});

    if (!lobby) {
      socket.emit("notificationRes", {msg: "Lobby not found."});
      return;
    }

    if (lobby.challengee.username) {
      socket.emit("notificationRes", {msg: "This lobby is full."});
    } else {
      const updated = await mongo.db.collection("lobbies").findOneAndUpdate(
        {lobbyId},
        {
          $set: {
            challengee: {username, bound, socketId, avatarId}
          }
        },
        {returnDocument: "after"}
      );
      const lobby = updated.value;

      const updatedP = await mongo.db.collection("players").findOneAndUpdate(
        {username},
        {
          $set: {
            "account.status": status.INLOBBY,
            "account.lobbyId": lobbyId
          }
        },
        {returnDocument: "after"}
      );
      const player = updatedP.value;

      delete lobby._id;

      socket.emit("joinLobbySenderRes", {lobby});

      io.to(lobby.host.socketId).emit("joinLobbyReceiverRes", {
        challengee: lobby.challengee
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export default joinLobby;