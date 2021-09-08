import {Writable, writable} from "svelte/store";

interface Store {
  decks: any[];
}
/** Stores collections decks view data. */
const decks: Writable<Store> = writable({
  decks: []
});
/** Combine player eos data with cards data to generate the view data */
const generateDecks = (eos): void => {
  decks.update((store) => {
    store.decks = eos.decks.map(({id, name, klass, cards}) => {
      let cardsInDeck = 0;

      if (cards.length) {
        cardsInDeck = cards.reduce((acc, {amount}) => acc += amount, 0);
      }

      return {id, name, klass, cardsInDeck};
    });

    return store;
  });
}

export default decks;
export {generateDecks};