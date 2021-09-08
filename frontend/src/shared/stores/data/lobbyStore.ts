import {Writable, writable} from "svelte/store";

interface Player {
  username: string;
  socket_id: string;
  avatar_id: number;
}
interface Lobby {
  lobby_id: number;
  host: Player;
  challengee: Player;
}

const lobbyStore: Writable<Lobby> = writable({
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

export default lobbyStore;