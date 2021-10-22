import {get} from "svelte/store";
import {status} from "models/data/Player";
import {socketService} from "services";
import {playerStore} from "stores/data";

interface Params {}

const exitGameReceiver = (params: Params): void => {
  const {username} = get(playerStore);

  playerStore.update((player) => {
    player.account.status = status.ONLINE;
    return player;
  });

  socketService.emit("updateFriend", {username});
};

export default exitGameReceiver;