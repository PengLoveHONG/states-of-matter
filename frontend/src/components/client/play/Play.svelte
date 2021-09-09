<script lang="ts">
  import Lobby from "./Lobby.svelte";
  import SelectMode from "./SelectMode.svelte";
  import {status} from "models/data/Player";
  import {playerStore} from "stores/data";
</script>

<style>
  .play {
    display: flex;
    height: 100%;
    width: 100%;
  }
</style>

<div class="play">
  {#if $playerStore.account.status === status.INLOBBY}
    <Lobby/>
  {:else}
    <SelectMode/>
  {/if}
</div>