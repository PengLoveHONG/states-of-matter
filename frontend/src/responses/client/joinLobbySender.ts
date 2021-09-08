import {status} from "models/data/Player";
import {socketService} from "services";
import {lobbyStore, playerStore} from "stores";
import {getSocketIds} from "stores/social";
import {get} from "svelte/store";

interface Params { lobby: any; }

const joinLobbySender = (params: Params): void => {
  const player = get(playerStore);

  lobbyStore.set(params.lobby);

  playerStore.update((store) => {
    store.account.status = status.INLOBBY;
    return store;
  });

  socketService.emit("updateFriendReq", {
    socketIds: getSocketIds(),
    username: player.username,
    status: status.INLOBBY
  });
};

export default joinLobbySender;