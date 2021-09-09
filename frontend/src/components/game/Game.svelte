<script lang="ts">
  import Fields from "./fields/Fields.svelte";
  import HandCards from "./hand-cards/HandCards.svelte";
  import Deck from "./Deck.svelte";
  import Graveyard from "./Graveyard.svelte";
  import Hero from "./Hero.svelte";
  import {eccService, socketService} from "services";
  import {gameStore, lobbyStore, playerStore} from "stores/data";

  const exit = (): void => {
    const {public_key, private_key} = $playerStore;
    const {game_id} = $gameStore;
    const signature = eccService.sign(`endgame:${game_id}`, private_key);

    socketService.emit("exitGameReq", {game_id, public_key, signature});
  };
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
    /* border: 1px solid rgb(var(--green));
    box-sizing: border-box; */
  }
  .player__cards {
    display: flex;
    justify-content: space-between;
  }
</style>

<div class="game">
  {#if $gameStore.player_a === $playerStore.username}
    <button class="btn--raised-accent" on:click={exit}>END</button>
  {/if}
  <div class="opponent">
    <p>
      {$gameStore.player_b}
    </p>
    <div class="player__right">
      <div class="player__cards">
        <Graveyard/>
        <HandCards belongsTo="opponent"/>
        <Deck/>
      </div>
      <Fields/>
    </div>
  </div>
  <div class="player">
    <p>
      {$gameStore.player_a}
    </p>
    <div class="player__right">
      <Fields/>
      <div class="player__cards">
        <Graveyard/>
        <HandCards belongsTo="self"/>
        <Deck/>
      </div>
    </div>
  </div>
</div>