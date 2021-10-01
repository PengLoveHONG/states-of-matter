import {socketService} from "services";
import {gameStore, lobbyStore, playerStore} from "stores/data";
import {socialStore} from "stores/view";

import type {Game, Lobby, Player} from "models/data";
import type {Friend} from "models/view/Social";

interface Params {
  player: Player;
  friends: Friend[];
  lobby: Lobby | undefined;
  game: Game | undefined;
}

const signin = (params: Params): void => {
  const {player, friends, lobby, game} = params;
  const {username, account: {status}} = player;

  playerStore.update((store) => {
    store.username = player.username;
    store.public_key = player.public_key;
    store.account = player.account;
    store.decks = player.decks;
    store.social = player.social;

    return store;
  });

  socialStore.update((store) => {
    store.friends = friends;
    return store;
  });

  if (lobby) { lobbyStore.set(lobby); }
  if (game) { gameStore.set(game); }

  socketService.emit("updateFriend", {username, status});
};

export default signin;