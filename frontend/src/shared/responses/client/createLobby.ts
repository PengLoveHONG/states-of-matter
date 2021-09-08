import {get} from "svelte/store";
import {status} from "models/Player";
import {socket} from "services/socket";
import {lobbyStore, playerStore} from "stores";
import {getSocketIds} from "stores/social";

interface Params { lobby: any }

const createLobby = (params: Params): void => {
  const {lobby} = params;
  const player = get(playerStore);
  const {socket_id, avatar_id} = player.account;

  lobbyStore.set(lobby);

  playerStore.update((store) => {
    store.account.status = status.INLOBBY;
    return store;
  });

  socket.emit("updateFriendReq", {
    socketIds: getSocketIds(),
    username: player.username,
    socketId: player.account.socket_id,
    status: player.account.status
  });
};

export default createLobby;