import {writable} from "svelte/store";

import type {Writable} from "svelte/store";

interface Decks {
  decks: any[];
}

const decksStore: Writable<Decks> = writable({
  decks: []
});

export default decksStore;