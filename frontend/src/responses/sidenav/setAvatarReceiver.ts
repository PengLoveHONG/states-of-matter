import {socialStore} from "stores/view";

interface Params {
  username: string;
  avatar_id: number;
}

const setAvatarReceiver = (params: Params): void => {
  const {username, avatar_id} = params;

  socialStore.update((store) => {
    const friend = store.friends.find((friend) => friend.username === username);
    friend.avatar_id = avatar_id;
    return store;
  });
};

export default setAvatarReceiver;