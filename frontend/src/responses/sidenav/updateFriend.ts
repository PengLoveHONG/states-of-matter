import {socialStore} from "stores/view";

interface UpdateFriend {
  username: string;
  socketId: string;
  status: number;
}

const updateFriend = (params: UpdateFriend): void => {
  const {username, socketId, status} = params;

  socialStore.update((store) => {
    const {friends} = store;
    const friend = friends.find((friend) => friend.username === username);

    if (socketId !== undefined) {friend.socketId = socketId;}
    if (status !== undefined) {friend.status = status;}
    // friend.socketId = socketId;
    // friend.status = status;

    return store;
  });
};

export default updateFriend;