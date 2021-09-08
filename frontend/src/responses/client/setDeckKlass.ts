import {get} from "svelte/store";
import {closeModal} from "stores/modal";
import {showNotification} from "stores/view/notifications";
import deck from "stores/deck";
import decks from "stores/decks";
import {playerStore} from "stores";

interface Params {
  id: number;
  klass: number;
}

const setDeckKlass = (params: Params): void => {
  const {id, klass} = params;
  const player = get(playerStore);

  playerStore.update((store) => {
    const deck = store.decks.find((deck) => deck.id === id);
    deck.klass = klass;
    return store;
  });

  decks.update((store) => {
    const deck = store.decks.find((deck) => deck.id === id);
    deck.klass = klass;
    return store;
  });

  if (id === player.account.deck_id) {
    deck.update((store) => {
      store.cards = [];
      store.cardsAmount = 0;
      return store;
    });
  }

  closeModal();
  showNotification("Deck class changed successfully.");
};

export default setDeckKlass;