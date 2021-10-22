<script lang="ts">
  import {Modal} from "components";
  import {eccService, socketService} from "services";
  import {playerStore} from "stores/data";

  let lobby_id: number;

  const onJoinLobby = (): void => {
    const {username, public_key, private_key} = $playerStore;
    const signature = eccService.sign(`joinlobby:${username}`, private_key);

    socketService.emit("joinLobby", {lobby_id, public_key, signature});
  };
</script>

<Modal>
  <form>
    <h3>Lobby ID</h3>
    <input placeholder="Lobby ID" type="number" bind:value={lobby_id}>
    <button class="btn--raised-blue" on:click={onJoinLobby}>JOIN</button>
  </form>
</Modal>