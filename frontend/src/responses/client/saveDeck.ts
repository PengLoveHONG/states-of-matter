import {miscService} from "services";
import {playerStore} from "stores/data";

import type {DeckCard} from "models/data/Player";

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

  miscService.showNotification("Deck saved successfully.");
};

export default saveDeck;