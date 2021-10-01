<script lang="ts">
  import {onMount} from "svelte";
  import ChatWindow from "./ChatWindow.svelte";
  import Modals from "./modals/Modals.svelte";
  import Notifications from "./Notifications.svelte";
  import Auth from "./auth/Auth.svelte";
  import Client from "./client/Client.svelte";
  import Sidenav from "./sidenav/Sidenav.svelte";
  import Game from "./game/Game.svelte";
  import responses from "responses";
  import {socketService} from "services";
  import {playerStore} from "stores/data";

  $: status = $playerStore.account.status;

  onMount(() => { socketService.listenToResponses(responses); });
</script>

<style>
  .game {
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: rgb(var(--grey));
    color: white;
  }
  .game__content { width: calc(100% - 384px); }
  .game__sidenav { width: 384px; }
</style>

<div class="game">
  {#if status === 0}
    <Auth/>
  {:else}
    <main class="game__content">
      {#if status === 1 || status === 2 || status === 3}
        <Client/>
      {:else if status === 4}
        <Game/>
      {/if}
    </main>
    <aside class="game__sidenav">
      <Sidenav/>
    </aside>
  {/if}
  <ChatWindow/>
  <Notifications/>
  <Modals/>
</div>