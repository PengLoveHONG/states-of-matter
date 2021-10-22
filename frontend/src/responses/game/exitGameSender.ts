import {get} from "svelte/store";
import {status} from "models/data/Player";
import {socketService } from "services";
import {playerStore} from "stores/data";

interface Params {}

const exitGameSender = (params: Params): void => {
  const {username} = get(playerStore);

  playerStore.update((store) => {
    store.account.status = status.ONLINE;
    return store;
  });

  socketService.emit("updateFriend", {username});
};

export default exitGameSender;