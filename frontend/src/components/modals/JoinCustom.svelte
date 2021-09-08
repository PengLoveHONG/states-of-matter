<script lang="ts">
  import {Modal} from "components";
  import {generateBound} from "services/ecc";
  import {socket} from "services/socket";
  import {playerStore} from "stores";

  let lobbyId: number;

  const join = () => {
    const bound = generateBound($playerStore.public_key);

    socket.emit("joinLobbyReq", {
      lobbyId,
      username: $playerStore.username,
      bound,
      socketId: $playerStore.account.socket_id,
      avatarId: $playerStore.account.avatar_id
    });
  };
</script>

<Modal>
  <form>
    <input placeholder="Lobby ID" type="number" bind:value={lobbyId}>
    <button class="btn--raised-blue" on:click={join}>JOIN</button>
  </form>
</Modal>