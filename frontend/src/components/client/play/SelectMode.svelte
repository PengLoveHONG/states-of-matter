<script lang="ts">
  import {eccService, miscService, socketService} from "services";
  import {playerStore} from "stores/data";

  const create = (): void => {
    const {public_key, private_key} = $playerStore;
    const lobby_id = Math.floor(Math.random() * 1000000000);
    const signature = eccService.sign(`makelobby:${lobby_id}`, private_key);

    socketService.emit("createLobby", {lobby_id, public_key, signature});
  };

  const join = (): void => {
    miscService.openModal("joinCustom");
  };
</script>

<style>
  .play {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .play__screen {
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

<div class="play">
  <div class="play__screen casual">
    <h1>CASUAL</h1>
    <p>Play for fun</p>
    <p>Casual coming soon... 😉</p>
  </div>

  <div class="play__screen ranked">
    <h1>RANKED</h1>
    <p>Rank up and earn SOM rewards</p>
    <p>Ranked coming soon... 😉</p>
  </div>

  <div class="play__screen custom">
    <h1>CUSTOM</h1>
    <p>Challenge your friends</p>
    <div>
      <button class="btn--raised-accent" on:click={create}>CREATE</button>
      <button class="btn--basic-accent" on:click={join}>JOIN</button>
    </div>
  </div>
</div>