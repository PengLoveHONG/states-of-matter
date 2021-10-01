<script lang="ts">
  import {eccService, socketService} from "services";
  import {lobbyStore, playerStore} from "stores/data";

  const start = (): void => {
    const {public_key, private_key} = $playerStore;
    const {lobby_id} = $lobbyStore;
    const signature = eccService.sign(`startgame:${lobby_id}`, private_key);

    socketService.emit("startGame", {lobby_id, public_key, signature});
  };

  const close = (): void => {
    const {public_key, private_key} = $playerStore;
    const {lobby_id} = $lobbyStore;
    const signature = eccService.sign(`destroylobby:${lobby_id}`, private_key);

    socketService.emit("closeLobby", {lobby_id, public_key, signature});
  };

  const exit = (): void => {
    const {public_key, private_key} = $playerStore;
    const {lobby_id} = $lobbyStore;
    const signature = eccService.sign(`leavelobby:${lobby_id}`, private_key);

    socketService.emit("exitLobby", {lobby_id, public_key, signature});
  };
</script>

<style>
  .lobby {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .players {
    margin: var(--spacing-md) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .host, .challengee {
    width: 256px;
    padding: var(--spacing-sm);
    display: flex;
    align-items: center;
    background-color: rgb(var(--light-grey));
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: var(--elevation-sm);
  }
  .challengee {
    justify-content: flex-end;
  }
  .host__avatar, .challengee__avatar {
    border-radius: 50%;
  }
  .host__avatar {
    margin-right: var(--spacing-sm);
  }
  .challengee__avatar {
    margin-left: var(--spacing-sm);
  }

  .vs {
    margin: 0 var(--spacing-md);
    animation: glow 10s cubic-bezier(var(--ease-in-out-quart)) 0s infinite alternate;
  }
  @keyframes glow {
    from {
      color: rgb(var(--green));
      text-shadow: 0 0 16px rgb(var(--green));
    } to {
      color: rgb(var(--purple));
      text-shadow: 0 0 16px rgb(var(--purple));
    }
  }
</style>

<div class="lobby">

  <h3>
    Game ID #<span class="f--purple">{$lobbyStore.lobby_id}</span>
  </h3>

  <div class="players">

    <div class="host">
      <img class="host__avatar" src="assets/avatars/{$lobbyStore.host.avatar_id}.jpg" alt="Host avatar" height="64" width="64">
      <p>
        {$lobbyStore.host.username}<br>
        <span class="f--purple">Host</span>
      </p>
    </div>

    <h1 class="vs">VS</h1>

    <div class="challengee">
      <p>
        {$lobbyStore.challengee.username ? $lobbyStore.challengee.username : "Awaiting..."}<br>
        <span class="f--green">Challengee</span>
      </p>
      <img class="challengee__avatar" src="assets/avatars/{$lobbyStore.challengee.username ? $lobbyStore.challengee.avatar_id : "unknown"}.jpg" alt="Challengee avatar" height="64" width="64">
    </div>
  </div>

  <div>
    {#if $lobbyStore.host.username === $playerStore.username}
      <button class="btn--raised-primary" on:click={start}>START</button>
      <button class="btn--raised-primary" on:click={close}>CLOSE</button>
    {:else}
      <button class="btn--basic-primary" on:click={exit}>EXIT</button>
    {/if}
  </div>

</div>