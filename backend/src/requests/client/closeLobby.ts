import type {App} from "../../models/App";

interface Params { lobbyId: number; }

const closeLobby = async (app: App, params: Params): Promise<void> => {
  try {
    const {io, mongo, socket} = app;
    const {lobbyId} = params;

    const deleted = await mongo
      .db
      .collection("lobbies")
      .findOneAndDelete({lobbyId});

    const lobby = deleted.value;

    socket.emit("closeLobbySenderRes");
    io.to(lobby.challengee.socketId).emit("closeLobbyReceiverRes");
  } catch (error) {
    console.error(error);
  }
};

export default closeLobby;