import {writable} from "svelte/store";

import type {Writable} from "svelte/store";
import type {Lobby} from "models/data/Lobby";

const lobbyStore: Writable<Lobby> = writable({
  lobby_id: 0,
  host: {
    username: "",
    avatar_id: 0
  },
  challengee: {
    username: "",
    avatar_id: 0
  }
});

export default lobbyStore;