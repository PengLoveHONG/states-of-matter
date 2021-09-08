import {writable} from "svelte/store";

import type {Writable} from "svelte/store";
import type {Game} from "models/data";

const gameStore: Writable<Game> = writable({
  gameId: 0,
  player: {
    username: "",
    socketId: "",
    hero: {
      hp: 100,
      maxHp: 100
    },
    fields: {
      trap: undefined,
      minionA: undefined,
      minionB: undefined,
      minionC: undefined,
      minionD: undefined,
      magic: undefined
    },
    hand: [],
    graveyard: [],
    deck: []
  },
  opponent: {
    username: "",
    socketId: "",
    hero: {
      hp: 100,
      maxHp: 100
    },
    fields: {
      trap: undefined,
      minionA: undefined,
      minionB: undefined,
      minionC: undefined,
      minionD: undefined,
      magic: undefined
    },
    hand: 0,
    deck: 30,
    graveyard: []
  }
});

export default gameStore;