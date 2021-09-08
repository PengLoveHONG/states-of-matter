<script lang="ts">
  import {onMount} from "svelte";
  import ChatWindow from "./ChatWindow.svelte";
  import Modals from "./Modals.svelte";
  import Notifications from "./Notifications.svelte";
  import Auth from "./auth/Auth.svelte";
  import Client from "./client/Client.svelte";
  import Sidenav from "./sidenav/Sidenav.svelte";
  import Game from "./game/Game.svelte";
  import responses from "responses";
  import {listenToResponses} from "services/socket";
  import {playerStore} from "stores";

  onMount(() => { listenToResponses(responses); });
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
  {#if $playerStore.account.status === 0}
    <Auth/>
  {:else}
    <main class="game__content">
      {#if
        $playerStore.account.status === 1 ||
        $playerStore.account.status === 2 ||
        $playerStore.account.status === 3
      }
        <Client/>
      {:else if $playerStore.account.status === 4}
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