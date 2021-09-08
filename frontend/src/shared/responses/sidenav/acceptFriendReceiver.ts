import {playerStore} from "stores";
import social from "stores/social";

interface AcceptFriendReceiver {
  username: string;
  socketId: string;
  avatarId: number;
  status: number;
}

const acceptFriendReceiver = (params: AcceptFriendReceiver): void => {
  const {username, socketId, avatarId, status} = params;

  playerStore.update((store) => {
    store.social.friends.push(username);
    return store;
  });

  social.update((store) => {
    store.friends.push({
      username,
      status,
      socketId,
      avatarId,
      messages: []
    });

    return store;
  });
};

export default acceptFriendReceiver;