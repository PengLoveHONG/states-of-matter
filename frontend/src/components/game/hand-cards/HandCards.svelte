<script>
  import Card from "../Card.svelte";
  import {cards} from "data";

  export let belongsTo;
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
  <div class="player__hand__card">
    {#if belongsTo === "opponent"}
      <img class="player__deck__img" src="assets/card-backs/default.jpg">
    {:else}
      <Card card={{...cards.get(4)[4], skinId: 0, klass: 4}}/>
    {/if}
  </div>
  <div class="player__hand__card">
    {#if belongsTo === "opponent"}
      <img class="player__deck__img" src="assets/card-backs/default.jpg">
    {:else}
      <Card card={{...cards.get(4)[4], skinId: 0, klass: 4}}/>
    {/if}
  </div>
  <div class="player__hand__card">
    {#if belongsTo === "opponent"}
      <img class="player__deck__img" src="assets/card-backs/default.jpg">
    {:else}
      <Card card={{...cards.get(4)[5], skinId: 0, klass: 4}}/>
    {/if}
  </div>
  <div class="player__hand__card">
    {#if belongsTo === "opponent"}
      <img class="player__deck__img" src="assets/card-backs/default.jpg">
    {:else}
      <Card card={{...cards.get(4)[7], skinId: 0, klass: 4}}/>
    {/if}
  </div>
  <div class="player__hand__card">
    {#if belongsTo === "opponent"}
      <img class="player__deck__img" src="assets/card-backs/default.jpg">
    {:else}
      <Card card={{...cards.get(4)[9], skinId: 0, klass: 4}}/>
    {/if}
  </div>
</div>