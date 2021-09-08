import type {DeckCard} from "models/data/Player";
import {showNotification} from "stores/view/notifications";
import {playerStore} from "stores";

interface Params {
  cards: Array<DeckCard>;
}

const saveDeck = (params: Params): void => {
  playerStore.update((store) => {
    const {deck_id} = store.account;
    const deck = store.decks.find((deck) => deck.id === deck_id);

    deck.cards = params.cards;

    return store;
  });

  showNotification("Deck saved successfully.");
};

export default saveDeck;