<script lang="ts">
  import {gameStore, playerStore} from "stores/data";
</script>

<style>
  .player__deck {
    height: 208px;
    width: 160px;
    margin: 0 var(--spacing-sm) var(--spacing-sm) 0;
  }
  .player__deck__img {
    height: 208px;
    width: 160px;
  }
</style>

<div class="player__deck">
  {#if $gameStore.player_a.username === $playerStore.username}
    {$gameStore.player_a.deck.length} / 30
  {:else}
    {$gameStore.player_b.deck.length} / 30
  {/if}
  <img class="player__deck__img" src="assets/card-backs/default.jpg" alt="Deck">
</div>