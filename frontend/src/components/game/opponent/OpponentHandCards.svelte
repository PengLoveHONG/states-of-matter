<script lang="ts">
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
  .player__deck__img {
    height: 208px;
    width: 160px;
  }
</style>

<div class="player__hand">
  {#if $gameStore.player_a.username !== $playerStore.username}
    {#each $gameStore.player_a.hand as {id, gid}}
      <div class="player__hand__card">
        <img class="player__deck__img" src="assets/card-backs/default.jpg" alt="">
      </div>
    {/each}
  {:else if $gameStore.player_b.username !== $playerStore.username}
    {#each $gameStore.player_b.hand as {id, gid}}
      <div class="player__hand__card">
        <img class="player__deck__img" src="assets/card-backs/default.jpg" alt="">
      </div>
    {/each}
  {/if}
</div>