import { status } from "models/data/Player";
import { socketService } from "services";
import {playerStore} from "stores";
import { getSocketIds } from "stores/social";
import { get } from "svelte/store";

interface ExitGameSender {}

const exitGameSender = (params: ExitGameSender): void => {
  playerStore.update((store) => {
    store.account.status = status.ONLINE;
    return store;
  });

  socketService.emit("updateFriendReq", {
    socketIds: getSocketIds(),
    username: get(playerStore).username,
    status: status.ONLINE
  });
};

export default exitGameSender;