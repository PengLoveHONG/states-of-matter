import type {DeckCard} from "models/Player";
import {showNotification} from "stores/notifications";
import {playerStore} from "stores";

interface SaveDeck {
  cards: Array<DeckCard>;
}

const saveDeck = (params: SaveDeck): void => {
  playerStore.update((store) => {
    const {deck_id} = store.account;
    const deck = store.decks.find((deck) => deck.id === deck_id);

    deck.cards = params.cards;

    return store;
  });

  showNotification("Deck saved successfully.");
};

export default saveDeck;