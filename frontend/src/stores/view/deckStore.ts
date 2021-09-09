import {writable} from "svelte/store";

import type {Writable} from "svelte/store";

interface Deck {
  name: string;
  cards: any[];
  cardsAmount: number;
}

const deckStore: Writable<Deck> = writable({
  name: "",
  cards: [],
  cardsAmount: 0
});

export default deckStore;