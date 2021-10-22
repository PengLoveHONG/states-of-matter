import {get} from "svelte/store";
import {status} from "models/data/Player";
import {socketService} from "services";
import {lobbyStore, playerStore} from "stores/data";

interface Params { lobby: any; }

const makeLobby = (params: Params): void => {
  const {lobby} = params;
  const {username} = get(playerStore);

  lobbyStore.set(lobby);

  playerStore.update((store) => {
    store.account.status = status.INLOBBY;
    return store;
  });

  socketService.emit("updateFriend", {username});
};

export default makeLobby;