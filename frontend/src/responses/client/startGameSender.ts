import {get} from "svelte/store";
import {status} from "models/data/Player";
import {socketService} from "services";
import {gameStore, playerStore} from "stores/data";

interface Params { game: any; }

const startGameSender = (params: Params): void => {
  const {username} = get(playerStore);

  playerStore.update((player) => {
    player.account.status = status.INGAME;
    return player;
  });

  gameStore.set(params.game);
  socketService.emit("updateFriend", {username});
};

export default startGameSender;