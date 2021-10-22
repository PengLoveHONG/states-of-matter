<script lang="ts">
  import {onMount, setContext} from "svelte";
  import {writable} from "svelte/store";
  import Deck from "./Deck.svelte";
  import Graveyard from "./Graveyard.svelte";
  import OpponentFields from "./opponent/OpponentFields.svelte";
  import OpponentHandCards from "./opponent/OpponentHandCards.svelte";
  import PlayerFields from "./player/PlayerFields.svelte";
  import PlayerHandCards from "./player/PlayerHandCards.svelte";
  import {eccService, socketService} from "services";
  import {gameStore, playerStore} from "stores/data";

  let selectedCard = writable({
    gid: 0,
    id: 0
  });

  let currentPlayer: string;

  setContext("selectedCard", selectedCard);

  const exit = (): void => {
    const {public_key, private_key} = $playerStore;
    const {game_id} = $gameStore;
    const signature = eccService.sign(`endgame:${game_id}`, private_key);

    socketService.emit("exitGame", {game_id, public_key, signature});
  };

  onMount(() => {
    currentPlayer = $gameStore.player_a.username === $playerStore.username ? "player_a" : "player_b";
  });
</script>

<style>
  .game {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .player, .opponent {
    flex-basis: 50%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .player__right {
    display: flex;
    flex-direction: column;
  }
  .player__cards {
    display: flex;
    justify-content: space-between;
  }
</style>

<div class="game">
  {#if $gameStore.player_a.username === $playerStore.username}
    <button class="btn--raised-accent" on:click={exit}>END</button>
  {/if}
  <div class="opponent">
    <p>
      {#if $gameStore.player_a.username !== $playerStore.username}
        {$gameStore.player_a.username}
      {:else}
        {$gameStore.player_b.username}
      {/if}
    </p>
    <div class="player__right">
      <div class="player__cards">
        <Deck/>
        <OpponentHandCards/>
        <Graveyard/>
      </div>
      <OpponentFields/>
    </div>
  </div>
  <div class="player">
    <p>
      {#if $gameStore.player_a.username === $playerStore.username}
        {$gameStore.player_a.username}
      {:else}
        {$gameStore.player_b.username}
      {/if}
    </p>
    <div class="player__right">
      <PlayerFields/>
      <div class="player__cards">
        <Graveyard/>
        <PlayerHandCards/>
        <Deck/>
      </div>
    </div>
  </div>
</div>