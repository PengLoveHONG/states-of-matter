import {playerStore} from "stores";

interface AddFriend {
  sender: string;
}

const addFriend = (params: AddFriend): void => {
  const {sender} = params;

  playerStore.update((player) => {
    player.social.requests.push(sender);
    return player;
  });
};

export default addFriend;