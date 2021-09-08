import {get} from "svelte/store";
import deck from "stores/deck";
import {showNotification} from "stores/notifications";
import {playerStore} from "stores";

interface SelectDeck {
  deck_id: number;
}

const selectDeck = (params: SelectDeck): void => {
  const {deck_id} = params;
  const player = get(playerStore);

  playerStore.update((store) => {
    store.account.deck_id = deck_id;
    return store;
  });

  deck.update((store) => {
    const {name} = player.decks.find((deck) => deck.id === deck_id);
    store.name = name;
    return store;
  });

  showNotification("Deck changed successfully.");
};

export default selectDeck;