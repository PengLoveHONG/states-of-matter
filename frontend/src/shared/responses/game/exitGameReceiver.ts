import { status } from "models/Player";
import { socket } from "services/socket";
import {playerStore} from "stores";
import { getSocketIds } from "stores/social";
import { get } from "svelte/store";

interface ExitGameReceiver {}

const exitGameReceiver = (params: ExitGameReceiver): void => {
  playerStore.update((store) => {
    store.account.status = status.ONLINE;
    return store;
  });

  socket.emit("updateFriendReq", {
    socketIds: getSocketIds(),
    username: get(playerStore).username,
    status: status.ONLINE
  });
};

export default exitGameReceiver;