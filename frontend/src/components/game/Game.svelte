<script lang="ts">
  import {onMount, setContext} from "svelte";
  import OpponentFields from "./opponent/OpponentFields.svelte";
  import PlayerFields from "./player/PlayerFields.svelte";
  import {eccService, socketService} from "services";
  import {gameStore, playerStore} from "stores/data";
  import {selectedCard} from "./stores";

  let currentPlayer: string;

  setContext("selectedCard", selectedCard);

  const onEndGame = (): void => {
    const {public_key, private_key} = $playerStore;
    const {id} = $gameStore;
    const signature = eccService.sign(`endgame:${id}`, private_key);

    socketService.emit("exitGame", {game_id: id, public_key, signature});
  };

  onMount(() => {
    currentPlayer = $gameStore.playerA.username === $playerStore.username ? "player_a" : "player_b";
  });
</script>

<style lang="scss">
  @import "../../styles/mixins";
  @import "../../styles/variables";

  .game {
    position: relative;
    height: 100%;
    width: 100%;
    @include d-flex(column, center, center);
  }

  .btn-end {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<div class="game">
  {#if $gameStore.playerA.username === $playerStore.username}
    <button class="btn-end btn--raised-accent" on:click={onEndGame}>END GAME</button>
  {/if}

  <OpponentFields/>
  <PlayerFields/>
</div>
