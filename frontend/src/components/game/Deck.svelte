<script lang="ts">
  import {gameStore, playerStore} from "stores/data";
</script>

<style lang="scss">
  @import "../../styles/mixins";
  @import "../../styles/variables";

  .player__deck {
    position: relative;
    height: $game-field-height;
    width: $game-field-width;
  }
  .player__deck__img {
    height: $game-field-height;
    width: $game-field-width;
  }

  .numofcards {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 0 0 2px black;
  }
</style>

<div class="player__deck">
  <div class="numofcards">
    {#if $gameStore.playerA.username === $playerStore.username}
      {$gameStore.playerA.deck.length} / 30
    {:else}
      {$gameStore.playerB.deck.length} / 30
    {/if}
  </div>
  <img class="player__deck__img" src="assets/card-backs/default.jpg" alt="Deck">
</div>