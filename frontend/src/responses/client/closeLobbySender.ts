import { status } from "models/data/Player";
import { socketService } from "services";
import {lobbyStore, playerStore} from "stores";
import { getSocketIds } from "stores/social";
import { get } from "svelte/store";

const closeLobbySender = (): void => {
  const player = get(playerStore);

  lobbyStore.set({
    lobby_id: 0,
    host: {
      username: "",
      socket_id: "",
      avatar_id: 0
    },
    challengee: {
      username: "",
      socket_id: "",
      avatar_id: 0
    }
  });

  playerStore.update((store) => {
    store.account.status = status.ONLINE;
    return store;
  });

  socketService.emit("updateFriendReq", {
    socketIds: getSocketIds(),
    username: player.username,
    status: player.account.status
  });
};

export default closeLobbySender;