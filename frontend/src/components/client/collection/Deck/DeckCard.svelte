<script lang="ts">
  import {createEventDispatcher} from "svelte";

  const dispatch = createEventDispatcher();
  let card: any = {};

  const removeFromDeck = () => {
    dispatch("removeFromDeck", card.id);
  };

  export {card};
</script>

<style>
  .card {
    margin: 0 var(--spacing-md) var(--spacing-md) var(--spacing-md);
    display: flex;
    align-items: center;
    background-color: rgb(var(--light-grey));
    border-radius: 4px;
    box-shadow: var(--elevation-md);
    cursor: pointer;
    overflow: hidden;
  }
  .card__img {
    height: 48px;
    width: 48px;
    margin-right: var(--spacing-md);
  }
  .card__text {
    flex-grow: 1;
  }
</style>

<div class="card" on:click={removeFromDeck}>
  <img
    class="card__img"
    src="assets/cards/{card.klass}/{card.id}.jpg"
    alt={card.name}>
  <div class="card__text">
    <span>{card.name}</span><br>
    <span>{card.amount} / 2</span>
  </div>
</div>