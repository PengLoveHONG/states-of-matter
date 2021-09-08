import {playerStore} from "stores";
import social from "stores/social";

interface AcceptFriendSender {
  username: string;
  socketId: string;
  avatarId: number;
  status: number;
}

const acceptFriendSender = (params: AcceptFriendSender): void => {
  const {username, socketId, avatarId, status} = params;

  playerStore.update((store) => {
    const {friends, requests} = store.social;
    const i = requests.indexOf(username);

    friends.push(username);
    requests.splice(i, 1);

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

export default acceptFriendSender;