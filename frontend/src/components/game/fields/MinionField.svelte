<script lang="ts">
  import {socket} from "services/socket";
  import {gameStore} from "stores";

  const onPlayCard = (): void => {
    socket.emit("playCardReq", {
      gameId: $gameStore.gameId,
      id: 0,
      gid: 0,
      field
    });
  };

  export let field;
</script>

<style>
  .minionfield {
    height: 208px;
    width: 160px;
    margin: var(--spacing-sm) var(--spacing-sm) 0 0;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgb(var(--orange));
    box-sizing: border-box;
  }
</style>

<div class="minionfield">
  <span class="f--orange">Minion Field {field}</span>
</div>