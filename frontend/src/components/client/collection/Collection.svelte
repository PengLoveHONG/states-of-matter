<script lang="ts">
  import Deck from "./Deck/Deck.svelte";
  import Decks from "./Decks/Decks.svelte";
  import {deckStore} from "stores/view";
  import Avatars from "./Avatars.svelte";

  const navLinks = [
    {ref: undefined, name: "Deck"},
    {ref: undefined, name: "Decks"},
    {ref: undefined, name: "Avatars"},
    {ref: undefined, name: "Card Skins"},
    {ref: undefined, name: "Card Back Skins"}
  ];
  let view = "Deck";

  const setNavActive = (ref) => {
    navLinks.forEach((navLink) => {
      navLink.ref.classList.remove("f--purple");
    });

    ref.classList.add("f--purple");
  };

  const gotoView = (ref, name) => {
    view = name;
    setNavActive(ref);
  };
</script>

<style>
  .collection {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  nav {
    padding: var(--spacing-md);
    box-sizing: border-box;
  }
  main {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  .coming-soon {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
  }
</style>

<div class="collection">
  <nav>
    {#each navLinks as {ref, name}}
      <div on:click={() => gotoView(ref, name)}>
        <i class="fas fa-circle fa-fw" bind:this={ref}></i>
        {#if name === "Deck"}
          {$deckStore.name}
        {:else}
          {name}
        {/if}
      </div>
    {/each}
  </nav>
  <main>
    {#if view === "Deck"}
      <Deck/>
    {:else if view === "Decks"}
      <Decks/>
    {:else if view === "Avatars"}
      <Avatars/>
    {:else if view === "Card Skins"}
      <p class="coming-soon">Card Skins coming soon... 😉</p>
    {:else if view === "Card Back Skins"}
      <p class="coming-soon">Card Back Skins coming soon... 😉</p>
    {/if}
  </main>
</div>