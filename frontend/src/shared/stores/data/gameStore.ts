import {Writable, writable} from "svelte/store";

interface Hero {
  hp: number;
  maxHp: number;
}

interface Fields {
  trap: any;
  minionA: any;
  minionB: any;
  minionC: any;
  minionD: any;
  magic: any;
}
interface Player {
  username: string;
  socketId: string;
  hero: Hero;
  fields: Fields;
  hand: any[];
  graveyard: any[];
  deck: any[];
}

interface Opponent {
  username: string;
  socketId: string;
  hero: Hero;
  fields: Fields;
  hand: number;
  graveyard: any[];
  deck: number;
}
interface Game {
  gameId: number;
  player: Player;
  opponent: Opponent;
}

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