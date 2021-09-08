import {get, Writable, writable} from "svelte/store";
import cards from "data/cards";
import type {DeckCard} from "models/data/Player";

interface Deck {
  name: string;
  cards: any[];
  cardsAmount: number;
}

const deck: Writable<Deck> = writable({
  name: "",
  cards: [],
  cardsAmount: 0
});

const generateCards = (eos): void => {
  const {account: {deck_id}, decks} = eos;

  const {klass} = decks.find((deck) => deck.id === deck_id);

  const klassCards = cards.get(klass);
  const neutralCards = cards.get(0);

  const _deck = decks.find(({id}) => id === deck_id);
  const deckCards = [];
  let deckCardsAmount: number;

  const {name} = decks.find(({id}) => id === deck_id);

  _deck.cards.forEach((card) => {
    const {id, amount} = card;
    const klassCard = klassCards.find(({id}) => id === card.id);
    const neutralCard = neutralCards.find(({id}) => id === card.id);
    let name;
    let currentKlass;

    if (klassCard) {
      name = klassCard.name;
      currentKlass = klass;
    }
    if (neutralCard) {
      name = neutralCard.name;
      currentKlass = 0;
    }

    deckCards.push({klass: currentKlass, id, name, amount});
  });

  deckCardsAmount = deckCards.reduce((acc, {amount}) => acc += amount, 0);

  deck.update((store) => {
    store.name = name;
    store.cards = deckCards;
    store.cardsAmount = deckCardsAmount;

    return store;
  });
};
/** Calculates amount of cards currently in deck. */
const calcDeckCardsAmount = (deckCards: Array<DeckCard>): number => {
  return deckCards.reduce((acc, {amount}) => acc += amount, 0);
};
/** Adds card to the cards array. */
const addCard = (id: number, name: string, klass: number): void => {
  if (get(deck).cardsAmount >= 30) return;

  deck.update((store) => {
    const deckCard = store.cards.find((deckCard) => deckCard.id === id);

    if (deckCard) {
      if (deckCard.amount < 2) {
        deckCard.amount += 1;
      }
    } else {
      const amount = 1;
      store.cards.push({klass, id, name, amount});
    }

    store.cardsAmount = calcDeckCardsAmount(store.cards);

    return store;
  });
};
/** Removes card from the cards array */
const removeCard = (id: number): void => {
  deck.update((store) => {
    const deckCard = store.cards.find((deckCard) => deckCard.id === id);

    if (deckCard.amount > 1) {
      deckCard.amount -= 1;
    } else {
      const i = store.cards.indexOf(deckCard);
      store.cards.splice(i, 1);
    }

    store.cardsAmount = calcDeckCardsAmount(store.cards);

    return store;
  });
};

export default deck;
export {generateCards, calcDeckCardsAmount, addCard, removeCard};