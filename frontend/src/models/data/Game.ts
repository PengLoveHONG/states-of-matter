interface Hero {
  health: number;
  damage: number;
  special: number;
}

interface Fields {
  minion_a: Card;
  minion_b: Card;
  minion_c: Card;
  minion_d: Card;
  minion_e: Card;
  magic: Card;
  trap: Card;
}

interface Card {
  gid: number;
  id: number;
}

interface Player {
  username: string;
  hero: Hero;
  fields: Fields;
  deck: Array<Card>;
  hand: Array<Card>;
  graveyard: Array<Card>;
}

interface Game {
  game_id: number;
  player_a: Player;
  player_b: Player;
}

export type {Game};