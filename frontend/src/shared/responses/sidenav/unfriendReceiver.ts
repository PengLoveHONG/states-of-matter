import {playerStore} from "stores";
import social from "stores/social";

interface UnfriendReceiver {
  username: string;
}

const unfriendReceiver = (params: UnfriendReceiver): void => {
  const {username} = params;

  playerStore.update((store) => {
    const {friends} = store.social;
    const i = friends.indexOf(username);

    friends.splice(i, 1);

    return store;
  });

  social.update((store) => {
    const {chat, friends} = store;
    const friend = friends.find((friend) => friend.username === username);
    const i = friends.indexOf(friend);

    friends.splice(i, 1);

    if (chat.username === username) chat.isOpen = false;

    return store;
  });
};

export default unfriendReceiver;