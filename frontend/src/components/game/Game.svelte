<script lang="ts">
  import Fields from "./fields/Fields.svelte";
  import HandCards from "./hand-cards/HandCards.svelte";
  import Deck from "./Deck.svelte";
  import Graveyard from "./Graveyard.svelte";
  import Hero from "./Hero.svelte";
  import {socketService} from "services";
  import {gameStore, lobbyStore, playerStore} from "stores/data";

  const exit = (): void => {
    socketService.emit("exitGameReq", {gameId: $lobbyStore.lobby_id});
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
  <!-- {#if $game.player.username === $player.mongo.username} -->
    <!-- <button class="btn--raised-accent" on:click={exit}>EXIT</button> -->
  <!-- {/if} -->
  <div class="opponent">
    <!-- <Hero/> -->
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
    <!-- <Hero/> -->
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