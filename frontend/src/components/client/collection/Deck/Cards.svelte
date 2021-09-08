<script lang="ts">
  import Card from "./Card.svelte";
  import Hero from "./Hero.svelte";
  import {cards, heroes} from "data";

  const klassMap = new Map([
    [0, "Neutral"],
    [1, "Solid"],
    [2, "Liquid"],
    [3, "Gas"],
    [4, "Plasma"],
  ]);
  let klass: number;

  export {klass};
</script>

<style>
  .cards {
    box-shadow: var(--elevation-sm);
    height: calc(256px * 2 + var(--spacing-md) * 3 + 64px);
  }
  .cards__header {
    height: 64px;
    padding: 0 var(--spacing-md);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card__klass {
    display: flex;
    align-items: center;
  }
  .cards__header__class-img {
    height: 32px;
    width: 32px;
    margin-right: var(--spacing-md);
  }
  .cards__list {
    height: calc(256px * 2 + var(--spacing-md) * 3);
    width: calc(calc(192px + 2 * var(--spacing-sm)) * 2 + var(--spacing-md) * 3 + 8px);
    padding: var(--spacing-md) var(--spacing-md) 0 0;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  .cards__list::-webkit-scrollbar {
    width: 8px;
    background-color: rgb(var(--light-grey));
    border-radius: 8px;
  }
  .cards__list::-webkit-scrollbar-thumb {
    background-color: rgb(var(--dark-grey));
    border-radius: 8px;
  }
</style>

<div class="cards">
  <div class="cards__header">
    <div class="card__klass">
      <img class="cards__header__class-img" src="assets/classes/{klass}.png" alt="Class"> {klassMap.get(klass)} Cards
    </div>
  </div>

  <div class="cards__list">
    <!-- {#if klass !== 0}
      <Hero hero={heroes.get(klass)} {klass}/>
    {/if} -->
    {#each cards.get(klass) as card}
      <Card {card} {klass}/>
    {/each}
  </div>
</div>