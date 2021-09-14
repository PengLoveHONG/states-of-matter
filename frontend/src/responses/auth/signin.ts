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
  const socketIds: Array<string> = [];

  console.log("signin");

  playerStore.update((store) => {
    store.username = player.username;
    store.public_key = player.public_key;
    // store.private_key_hash = player.private_key_hash;
    store.account = player.account;
    store.decks = player.decks;
    store.social = player.social;

    return store;
  });

  socialStore.update((store) => {
    store.friends = friends;
    return store;
  });

  friends.forEach(({socketId}) => {
    if (socketId) { socketIds.push(socketId); }
  });

  if (lobby) { lobbyStore.set(lobby); }
  if (game) { gameStore.set(game); }

  socketService.emit("updateFriendReq", {
    socketIds,
    username: player.username,
    socketId: player.account.socket_id,
    status: player.account.status
  });
};

export default signin;