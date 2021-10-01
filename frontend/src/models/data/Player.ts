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

interface Account {
  status: number;
  xp: number;
  lv: number;
  deck_id: number;
  avatar_id: number;
  lobby_id: number;
  game_id: number;
}

interface Social {
  friends: string[];
  requests: string[];
  blocked: string[];
}

interface Player {
  username: string;
  public_key: string;
  private_key: string;
  private_key_hash: string;
  account: Account;
  decks: Deck[],
  social: Social;
}

export {klass, status};
export type {DeckCard, Deck, Player};