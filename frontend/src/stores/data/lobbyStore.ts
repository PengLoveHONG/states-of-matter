import {writable} from "svelte/store";

import type {Writable} from "svelte/store";
import type {Lobby} from "models/data/Lobby";

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