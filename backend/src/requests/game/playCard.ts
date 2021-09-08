import type {App} from "../../models/App";

interface Params {
  gameId: number;
  id: number;
  gid: number;
  field: number;
}

const playCard = async (app: App, params: Params): Promise<void> => {
  try {
    const {mongo, socket} = app;
    const {gameId, id, gid, field} = params;

    await mongo.db.collection("games").updateOne({gameId}, {
      $pull: {
        "playerA.hand": {id, gid}
      },
      $set: {
        [`playerA.field.${field}`]: {id, gid}
      }
    });

    socket.emit("playCardRes", {});
  } catch (error) {
    console.error(error);
  }
};

export default playCard;