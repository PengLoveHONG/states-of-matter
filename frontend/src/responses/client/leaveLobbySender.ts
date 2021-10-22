import {get} from "svelte/store";
import {status} from "models/data/Player";
import {socketService } from "services";
import {lobbyStore, playerStore} from "stores/data";

const leaveLobbySender = (): void => {
  const {username} = get(playerStore);

  lobbyStore.set({
    lobby_id: 0,
    host: {username: "", avatar_id: 0},
    challengee: {username: "", avatar_id: 0}
  });

  playerStore.update((store) => {
    store.account.status = status.ONLINE;
    return store;
  });

  socketService.emit("updateFriend", {username});
};

export default leaveLobbySender;