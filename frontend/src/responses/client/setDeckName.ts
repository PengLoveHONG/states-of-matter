import {get} from "svelte/store";
import {closeModal} from "stores/modal";
import {showNotification} from "stores/view/notifications";
import deck from "stores/deck";
import decks from "stores/decks";
import {playerStore} from "stores";

interface Params {
  id: number;
  name: string;
}

const changeDeckName = (params: Params): void => {
  const {id, name} = params;
  const player = get(playerStore);

  playerStore.update((store) => {
    const deck = store.decks.find((deck) => deck.id === id);
    deck.name = name;
    return store;
  });

  decks.update((store) => {
    const deck = store.decks.find((deck) => deck.id === id);
    deck.name = name;
    return store;
  });

  if (id === player.account.deck_id) {
    deck.update((store) => {
      store.name = name;
      return store;
    });
  }

  closeModal();
  showNotification("Deck name changed successfully.");
};

export default changeDeckName;