import {writable} from "svelte/store";

import type {Writable} from "svelte/store";
import type {Game} from "models/data";

const gameStore: Writable<Game> = writable({
  game_id: 0,
  player_a: "",
  player_b: ""
});

export default gameStore;