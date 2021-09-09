import {get} from "svelte/store";
import {miscService} from "services";
import {playerStore} from "stores/data";
import {deckStore} from "stores/view";

interface Params { deck_id: number; }

const selectDeck = (params: Params): void => {
  const {deck_id} = params;
  const player = get(playerStore);

  playerStore.update((player) => {
    player.account.deck_id = deck_id;
    return player;
  });

  deckStore.update((deck) => {
    const {name} = player.decks.find((deck) => deck.id === deck_id);
    deck.name = name;
    return deck;
  });

  miscService.showNotification("Deck changed successfully.");
};

export default selectDeck;