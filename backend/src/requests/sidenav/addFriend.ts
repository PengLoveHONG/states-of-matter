import type {App} from "../../models/App";

interface Params {
  friendname: string;
  public_key: string;
  signature: string;
}

const addFriend = async (app: App, params: Params): Promise<void> => {
  const {eos, socket} = app;

  try {
    await eos.pushAction("addfriend", params);

    // const filter = {username: receiver};
    // const friend = await mongo.db.collection("players").findOne(filter);

    // if (friend) {
    //   if (friend.social.requests.includes(sender)) {
    //     socket.emit("notificationRes", {msg: "Friend request already sent."});
    //   } else if (friend.social.blocked.includes(sender)) {
    //     socket.emit("notificationRes", {msg: "This user has blocked you."});
    //   } else {
    //     await mongo.db.collection("players").updateOne(filter, {
    //       $push: {
    //         "social.requests": sender
    //       }
    //     });

    //     if (friend.account.socketId) {
    //       io.to(friend.account.socketId).emit("addFriendRes", {sender});
    //     }

    //     socket.emit("notificationRes", {msg: "Friend request sent."});
    //   }
    // } else {
    //   socket.emit("notificationRes", {msg: "Username not found."});
    // }
    socket.emit("notificationRes", {msg: "Friend request sent."});
  } catch (error) {
    console.error(error);
  }
};

export default addFriend;