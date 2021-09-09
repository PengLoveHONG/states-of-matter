import {get} from "svelte/store";
import {status} from "models/data/Player";
import {miscService, socketService} from "services";
import {lobbyStore, playerStore} from "stores/data";

interface Params { lobby: any; }

const joinLobbySender = (params: Params): void => {
  const player = get(playerStore);

  lobbyStore.set(params.lobby);

  playerStore.update((store) => {
    store.account.status = status.INLOBBY;
    return store;
  });

  socketService.emit("updateFriendReq", {
    socketIds: miscService.getSocketIds(),
    username: player.username,
    status: status.INLOBBY
  });
};

export default joinLobbySender;