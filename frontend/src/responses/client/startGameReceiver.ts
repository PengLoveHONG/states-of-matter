import {get} from "svelte/store";
import {status} from "models/data/Player";
import {miscService, socketService} from "services";
import {gameStore, playerStore} from "stores/data";

const startGameReceiver = (): void => {
  playerStore.update((store) => {
    store.account.status = status.INGAME;
    return store;
  });

  gameStore.update((store) => {
    store.player_b = get(playerStore).username;
    return store;
  });

  socketService.emit("updateFriendReq", {
    socketIds: miscService.getSocketIds(),
    username: get(playerStore).username,
    status: status.INGAME
  });
};

export default startGameReceiver;