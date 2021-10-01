enum klass {NEUTRAL, SOLID, LIQUID, GAS, PLASMA};
enum status {OFFLINE, ONLINE, INLOBBY, INQUEUE, INGAME};

interface DeckCard {
  id: number;
  amount: number;
}

interface Deck {
  id: number;
  name: string;
  klass: number;
  cards: DeckCard[]
}

interface Player {
  username: string;
  public_key: string;
  account: {
    status: number;
    xp: number;
    lv: number;
    deck_id: number;
    avatar_id: number;
    lobby_id: number;
    game_id: number;
  };
  decks: Deck[],
  social: {
    friends: string[];
    requests: string[];
    blocked: string[]
  };
}

export {klass, status};
export type {DeckCard, Deck, Player};