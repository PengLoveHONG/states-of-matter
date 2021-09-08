import type {App} from "../../models/App";

interface Params {
  socketIds: string[];
  username: string;
  socketId: string;
  status: number;
}

const updateFriend = (app: App, params: Params): void => {
  const {mongo, io} = app;
  const {socketIds, username, socketId, status} = params;

  //mongo.getSocketIds();

  socketIds.forEach((id) => {
    io.to(id).emit("updateFriendRes", {username, socketId, status});
  });
};

export default updateFriend;