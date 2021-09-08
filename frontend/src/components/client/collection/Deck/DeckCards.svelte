<script lang="ts">
  import DeckCard from "./DeckCard.svelte";
  import {generateSignature} from "services/ecc";
  import {socket} from "services/socket";
  import deck, {removeCard} from "stores/deck";
  import {playerStore} from "stores";

  const saveDeck = (): void => {
    const {username, public_key, private_key} = $playerStore;
    const cards = $deck.cards.map(({id, amount}) => ({id, amount}));
    const signature = generateSignature(`savedeck:${cards.length}`, private_key);

    socket.emit("saveDeckReq", {cards, public_key, signature});
  };

  const removeFromDeck = (event): void => {
    removeCard(event.detail);
  };

  const clearDeck = (): void => {
    $deck.cards = [];
    $deck.cardsAmount = 0;
  };
</script>

<style>
  .deck {
    position: relative;
    width: calc(256px + var(--spacing-md) * 2);
    display: flex;
    flex-direction: column;
    box-shadow: var(--elevation-sm);
  }
  .deck__toolbar {
    height: 64px;
    padding: 0 var(--spacing-md);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .deck__cards {
    margin-top: var(--spacing-md);
    height: calc(256px * 2 + var(--spacing-md) * 2);
    width: calc(248px + 16px * 2);
    overflow-y: scroll;
    box-sizing: border-box;
  }
  .deck__cards::-webkit-scrollbar {
    width: 8px;
  }
  .deck__cards::-webkit-scrollbar-track {
    background-color: transparent;
  }
  .deck__cards::-webkit-scrollbar-thumb {
    background-color: rgb(var(--dark-grey));
    border: 1px solid transparent;
    border-radius: 8px;
    box-sizing: border-box;
  }
</style>

<div class="deck">
  <div class="deck__toolbar">
    <div>
      {$deck.cardsAmount} / 30
    </div>
    <div>
      <button class="btn--icon" title="Clear deck" on:click={clearDeck}>
        <i class="fas fa-trash fa-fw"></i>
      </button>
      <button class="btn--icon" title="Save deck" on:click={saveDeck}>
        <i class="fas fa-save fa-fw"></i>
      </button>
    </div>
  </div>
  <div class="deck__cards">
    {#each $deck.cards as card}
      <DeckCard {card} on:removeFromDeck={removeFromDeck}/>
    {/each}
  </div>
</div>