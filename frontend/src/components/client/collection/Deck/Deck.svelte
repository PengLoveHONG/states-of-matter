<script lang="ts">
  import {onMount} from "svelte";
  import Cards from "./Cards.svelte";
  import DeckCards from "./DeckCards.svelte";
  import {cards} from "data";
  import {playerStore} from "stores/data";
  import {deckStore} from "stores/view";

  let {klass} = $playerStore.decks.find(
    (deck) => deck.id === $playerStore.account.deck_id
  );

  onMount(() => {
    const {account: {deck_id}, decks} = $playerStore;

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

    deckStore.update((store) => {
      store.name = name;
      store.cards = deckCards;
      store.cardsAmount = deckCardsAmount;

      return store;
    });
  });
</script>

<style>
  div {
    padding: 0 0 var(--spacing-md) var(--spacing-md);
    display: flex;
  }
  section {
    margin: var(--spacing-md) var(--spacing-md) 0 0;
    box-shadow: var(--elevation-sm);
  }
</style>

<div>
  <section>
    <Cards {klass}/>
  </section>
  <section>
    <DeckCards/>
  </section>
  <section>
    <Cards klass={0}/>
  </section>
</div>