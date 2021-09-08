import type {Player} from "models/Player";
import type {Friend} from "models/Social";
import {socket} from "services/socket";
import {playerStore} from "stores";
import social from "stores/social";
import {gameStore, lobbyStore} from "stores";

interface Signin {
  player: Player;
  friends: Friend[];
  lobby: any | undefined;
  game: any | undefined;
}

const signin = (params: Signin): void => {
  const {player, friends, lobby, game} = params;
  const socketIds: Array<string> = [];

  playerStore.update((store) => {
    store.username = player.username;
    store.public_key = player.public_key;
    // store.private_key_hash = player.private_key_hash;
    store.account = player.account;
    store.decks = player.decks;
    store.social = player.social;

    return store;
  });

  social.update((store) => {
    store.friends = friends;
    return store;
  });

  friends.forEach(({socketId}) => {
    if (socketId) { socketIds.push(socketId); }
  });

  if (lobby) { lobbyStore.set(lobby); }
  if (game) { gameStore.set(game); }

  socket.emit("updateFriendReq", {
    socketIds,
    username: player.username,
    socketId: player.account.socket_id,
    status: player.account.status
  });
};

export default signin;