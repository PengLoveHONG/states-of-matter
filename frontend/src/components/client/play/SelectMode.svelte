<script lang="ts">
  import {eccService, miscService, socketService} from "services";
  import {playerStore} from "stores/data";

  const onMakeLobby = (): void => {
    const {username, public_key, private_key} = $playerStore;
    const signature = eccService.sign(`makelobby:${username}`, private_key);

    socketService.emit("makeLobby", {public_key, signature});
  };

  const onJoinLobby = (): void => { miscService.openModal("joinLobby"); };
</script>

<style>
  .play-screens {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .play-screen {
    flex-basis: 33.3333%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    box-sizing: border-box;
    transition: border-color 225ms ease-in-out;
  }
  .casual:hover {
    border-top-color: rgb(var(--blue));
    border-bottom-color: rgb(var(--blue));
  }
  .ranked:hover {
    border-top-color: rgb(var(--purple));
    border-bottom-color: rgb(var(--purple));
  }
  .custom:hover {
    border-top-color: rgb(var(--green));
    border-bottom-color: rgb(var(--green));
  }
</style>

<div class="play-screens">

  <div class="play-screen casual">
    <h1>CASUAL</h1>
    <p>Play for fun</p>
    <p>Casual coming soon... 😉</p>
  </div>

  <div class="play-screen ranked">
    <h1>RANKED</h1>
    <p>Rank up and earn SOM rewards</p>
    <p>Ranked coming soon... 😉</p>
  </div>

  <div class="play-screen custom">
    <h1>CUSTOM</h1>
    <p>Challenge your friends</p>
    <div>
      <button class="btn--raised-accent" on:click={onMakeLobby}>MAKE</button>
      <button class="btn--basic-accent" on:click={onJoinLobby}>JOIN</button>
    </div>
  </div>

</div>