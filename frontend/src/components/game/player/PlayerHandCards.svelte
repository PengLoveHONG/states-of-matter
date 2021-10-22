<script lang="ts">
  import Card from "../Card.svelte";
  import {cards} from "data";
  import {gameStore, playerStore} from "stores/data";
</script>

<style>
  .player__hand {
    display: flex;
  }
  .player__hand__card {
    height: 208px;
    width: 160px;

    transition: transform 225ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .player__hand__card:hover {
    transform: translateY(-24px);
  }
  .player__hand__card:hover~.player__hand__card {
    transform: translateX(80px);
  }
  .player__hand__card:not(:first-child) {
    margin-left: -80px;
  }
</style>

<div class="player__hand">
  {#if $gameStore.player_a.username === $playerStore.username}

    {#each $gameStore.player_a.hand as {id, gid}}
      <div class="player__hand__card">
        {#if id >= 0 && id <= 49}
          <Card card={{...cards.get(0).find((x) => x.id === id), klass: 0, gid}}/>
        {:else if id >= 50 && id <= 99}
          <Card card={{...cards.get(1).find((x) => x.id === id), klass: 1, gid}}/>
        {:else if id >= 100 && id <= 149}
          <Card card={{...cards.get(2).find((x) => x.id === id), klass: 2, gid}}/>
        {:else if id >= 150 && id <= 199}
          <Card card={{...cards.get(3).find((x) => x.id === id), klass: 3, gid}}/>
        {:else if id >= 200 && id <= 249}
          <Card card={{...cards.get(4).find((x) => x.id === id), klass: 4, gid}}/>
        {/if}
      </div>
    {/each}

  {:else if $gameStore.player_b.username === $playerStore.username}

    {#each $gameStore.player_b.hand as {id, gid}}
      <div class="player__hand__card">
        {#if id >= 0 && id <= 49}
          <Card card={{...cards.get(0).find((x) => x.id === id), klass: 0, gid}}/>
        {:else if id >= 50 && id <= 99}
          <Card card={{...cards.get(1).find((x) => x.id === id), klass: 1, gid}}/>
        {:else if id >= 100 && id <= 149}
          <Card card={{...cards.get(2).find((x) => x.id === id), klass: 2, gid}}/>
        {:else if id >= 150 && id <= 199}
          <Card card={{...cards.get(3).find((x) => x.id === id), klass: 3, gid}}/>
        {:else if id >= 200 && id <= 249}
          <Card card={{...cards.get(4).find((x) => x.id === id), klass: 4, gid}}/>
        {/if}
      </div>
    {/each}

  {/if}
</div>