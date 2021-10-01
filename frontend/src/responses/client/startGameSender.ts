import {get} from "svelte/store";
import {status} from "models/data/Player";
import {socketService} from "services";
import {gameStore, playerStore} from "stores/data";

const startGameSender = (params): void => {
  playerStore.update((player) => {
    player.account.status = status.INGAME;
    return player;
  });

  gameStore.set(params.game);
  // gameStore.update((game) => {
  //   game.player_a = get(playerStore).username;
  //   return game;
  // });

  socketService.emit("updateFriend", {
    username: get(playerStore).username,
    status: status.INGAME
  });
};

export default startGameSender;