import {playerStore} from "stores/data";

interface Params { sender: string; }

const addFriend = (params: Params): void => {
  const {sender} = params;

  playerStore.update((player) => {
    player.social.requests.push(sender);
    return player;
  });
};

export default addFriend;