import {status} from "models/Player";
import { socket } from "services/socket";
import {lobbyStore, playerStore} from "stores";
import { getSocketIds } from "stores/social";
import { get } from "svelte/store";

const closeLobbyReceiver = (): void => {
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

  playerStore.update((player) => {
    player.account.status = status.ONLINE;
    return player;
  });

  socket.emit("updateFriendReq", {
    socketIds: getSocketIds(),
    username: player.username,
    status: player.account.status
  });
};

export default closeLobbyReceiver;