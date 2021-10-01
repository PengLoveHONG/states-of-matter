<script lang="ts">
  import {Modal} from "components";
  import {eccService, socketService} from "services";
  import {playerStore} from "stores/data";

  let lobby_id: number;

  const onJoin = (): void => {
    const {public_key, private_key} = $playerStore;
    const signature = eccService.sign(`joinlobby:${lobby_id}`, private_key);

    socketService.emit("joinLobby", {lobby_id, public_key, signature});
  };
</script>

<Modal>
  <form>
    <input placeholder="Lobby ID" type="number" bind:value={lobby_id}>
    <button class="btn--raised-blue" on:click={onJoin}>JOIN</button>
  </form>
</Modal>