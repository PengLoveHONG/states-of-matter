import {get} from "svelte/store";
import { status } from "models/data/Player";
import {miscService, socketService} from "services";
import {playerStore} from "stores/data";

interface Params {}

const exitGameReceiver = (params: Params): void => {
  playerStore.update((store) => {
    store.account.status = status.ONLINE;
    return store;
  });

  socketService.emit("updateFriendReq", {
    socketIds: miscService.getSocketIds(),
    username: get(playerStore).username,
    status: status.ONLINE
  });
};

export default exitGameReceiver;