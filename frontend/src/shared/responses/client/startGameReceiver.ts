import {get} from "svelte/store";
import {status} from "models/Player";
import {socket} from "services/socket";
import {gameStore, playerStore} from "stores";
import {getSocketIds} from "stores/social";

const startGameReceiver = (): void => {
  playerStore.update((store) => {
    store.account.status = status.INGAME;
    return store;
  });

  gameStore.update((store) => {
    store.opponent.username = get(playerStore).username;
    return store;
  });

  socket.emit("updateFriendReq", {
    socketIds: getSocketIds(),
    username: get(playerStore).username,
    status: status.INGAME
  });
};

export default startGameReceiver;