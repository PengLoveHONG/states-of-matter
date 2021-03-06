import {playerStore} from "stores/data";
import {socialStore} from "stores/view";

interface AcceptFriendSender {
  username: string;
  avatar_id: number;
  status: number;
}

const acceptFriendSender = (params: AcceptFriendSender): void => {
  const {username, avatar_id, status} = params;

  playerStore.update((store) => {
    const {friends, requests} = store.social;
    const i = requests.indexOf(username);

    friends.push(username);
    requests.splice(i, 1);

    return store;
  });

  socialStore.update((store) => {
    store.friends.push({username, status, avatar_id, messages: []});
    return store;
  });
};

export default acceptFriendSender;