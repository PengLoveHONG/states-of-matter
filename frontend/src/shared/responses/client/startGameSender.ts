import {get} from "svelte/store";
import { status } from "models/Player";
import { socket } from "services/socket";
import {gameStore, playerStore} from "stores";
import { getSocketIds } from "stores/social";

const startGameSender = (): void => {
  playerStore.update((player) => {
    player.account.status = status.INGAME;
    return player;
  });

  gameStore.update((game) => {
    game.player.username = get(playerStore).username;
    return game;
  });

  socket.emit("updateFriendReq", {
    socketIds: getSocketIds(),
    username: get(playerStore).username,
    status: status.INGAME
  });
};

export default startGameSender;