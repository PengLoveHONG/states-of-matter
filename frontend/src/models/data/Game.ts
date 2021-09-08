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

export type {Game};