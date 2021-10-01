import {writable} from "svelte/store";

import type {Writable} from "svelte/store";
import type {Player} from "models/data";

const playerStore: Writable<Player> = writable({
  username: "",
  public_key: "",
  private_key: "",
  private_key_hash: "",
  account: {
    status: 0,
    xp: 0,
    lv: 1,
    deck_id: 0,
    avatar_id: 0,
    lobby_id: 0,
    game_id: 0
  },
  decks: [],
  social: {
    friends: [],
    requests: [],
    blocked: []
  }
});

export default playerStore;