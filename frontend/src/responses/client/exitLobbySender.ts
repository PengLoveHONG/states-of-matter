import {get} from "svelte/store";
import { status } from "models/data/Player";
import { miscService, socketService } from "services";
import {lobbyStore, playerStore} from "stores/data";

const exitLobbySender = (): void => {
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

  socketService.emit("updateFriend", {
    socketIds: miscService.getSocketIds(),
    username: player.username,
    status: player.account.status
  });
};

export default exitLobbySender;