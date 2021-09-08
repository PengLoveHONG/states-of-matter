<script lang="ts">
  import {onMount} from "svelte";
  import Deck from "./Deck.svelte";
  import decks, {generateDecks} from "stores/decks";
  import {playerStore} from "stores";

  onMount(() => {
    generateDecks($playerStore);
  });
</script>

<style>
  .deck-picker {
    width: calc(256px * 4 + var(--spacing-md) * 5);
    padding: var(--spacing-md) 0 0 var(--spacing-md);
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    /* box-shadow: var(--elevation-sm); */
  }
  .deck {
    position: relative;
    height: 320px;
    width: 256px;
    margin: 0 var(--spacing-md) var(--spacing-md) 0;
    box-shadow: var(--elevation-md);
    overflow: hidden;
  }
  .deck__image {
    height: 320px;
    width: 256px;
    cursor: pointer;
    transition: transform 225ms ease-in-out;
  }
  .deck__image:hover{
    transform: scale(1.1);
  }
  .deck__footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: var(--spacing-md);
    display: flex;
    background-size: 100%;
    background-image: linear-gradient(to top, rgba(21, 21, 21, 1), rgba(21, 21, 21, 0.5));
    box-sizing: border-box;
    z-index: 1;
  }
  .deck__footer::before{
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-image: linear-gradient(to top, rgba(21, 21, 21, 1), rgba(21, 21, 21, 1));
    opacity: 0;
    z-index: -1;
    transition: opacity 225ms ease-in-out;
  }
  .deck__footer:hover::before {
    opacity: 1;
  }
</style>

<div class="deck-picker">
  {#each $decks.decks as deck}
    <Deck {deck}/>
  {/each}

  <div class="deck">

    <div class="deck__image d--flex ai--center jc--center">
      <i class="fas fa-plus"></i>
    </div>

    <div class="deck__footer">

      <div class="d--flex jc--center">
        <p>Buy new deck</p>
      </div>

      <div class="d--flex jc--center">
        <button disabled={$playerStore.decks.length >= 12}>
          1 <img src="assets/currencies/telos.png" width="24" height="24" alt="TLOS">
        </button>
      </div>
    </div>

  </div>

</div>