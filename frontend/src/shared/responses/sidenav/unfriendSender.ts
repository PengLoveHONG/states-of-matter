import {closeModal} from "stores/modal";
import {playerStore} from "stores";
import social from "stores/social";

interface UnfriendSender {
  friendname: string;
}

const unfriendSender = (params: UnfriendSender): void => {
  const {friendname} = params;

  playerStore.update((store) => {
    const {friends} = store.social;
    const i = friends.indexOf(friendname);

    friends.splice(i, 1);

    return store;
  });

  social.update((store) => {
    const {chat, friends} = store;
    const friend = friends.find((friend) => friend.username === friendname);
    const i = friends.indexOf(friend);

    friends.splice(i, 1);

    if (chat.username === friendname) chat.isOpen = false;

    return store;
  });

  closeModal();
};

export default unfriendSender;