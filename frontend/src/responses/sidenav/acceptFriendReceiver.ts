import {playerStore} from "stores/data";
import {socialStore} from "stores/view";

interface Params {
  username: string;
  socketId: string;
  avatarId: number;
  status: number;
}

const acceptFriendReceiver = (params: Params): void => {
  const {username, socketId, avatarId, status} = params;

  playerStore.update((store) => {
    store.social.friends.push(username);
    return store;
  });

  socialStore.update((store) => {
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