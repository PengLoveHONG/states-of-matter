import {get} from "svelte/store";
import {status} from "models/data/Player";
import {socketService} from "services";
import {gameStore, playerStore} from "stores/data";

const startGameReceiver = (params): void => {
  playerStore.update((store) => {
    store.account.status = status.INGAME;
    return store;
  });

  gameStore.set(params.game);
  // gameStore.update((store) => {
  //   store.player_b = get(playerStore).username;
  //   return store;
  // });

  socketService.emit("updateFriend", {
    username: get(playerStore).username,
    status: status.INGAME
  });
};

export default startGameReceiver;