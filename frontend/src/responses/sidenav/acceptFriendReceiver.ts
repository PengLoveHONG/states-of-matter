import {playerStore} from "stores/data";
import {socialStore} from "stores/view";

interface Params {
  username: string;
  avatar_id: number;
  status: number;
}

const acceptFriendReceiver = (params: Params): void => {
  const {username, avatar_id, status} = params;

  playerStore.update((store) => {
    store.social.friends.push(username);
    return store;
  });

  socialStore.update((store) => {
    store.friends.push({username, status, avatar_id, messages: []});
    return store;
  });
};

export default acceptFriendReceiver;