<script lang="ts">
  import {onMount} from "svelte";
  import Cards from "./Cards.svelte";
  import DeckCards from "./DeckCards.svelte";
  import {generateCards} from "stores/deck";
  import {playerStore} from "stores";

  let {klass} = $playerStore.decks.find(
    (deck) => deck.id === $playerStore.account.deck_id
  );

  onMount(() => { generateCards($playerStore); });
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