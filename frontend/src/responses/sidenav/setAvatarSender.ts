import {playerStore} from "stores/data";

interface Params { avatar_id: number; }

const setAvatarSender = (params: Params): void => {
  playerStore.update((player) => {
    player.account.avatar_id = params.avatar_id;
    return player;
  });
};

export default setAvatarSender;