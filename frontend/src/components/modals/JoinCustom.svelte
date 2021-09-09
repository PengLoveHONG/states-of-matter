<script lang="ts">
  import {Modal} from "components";
  import {eccService, socketService} from "services";
  import {playerStore} from "stores/data";

  let lobby_id: number;

  const join = () => {
    // const {public_key, private_key} = $playerStore;
    // const signature = eccService.sign(`joinlobby:${lobby_id}`, private_key);

    // socketService.emit("joinLobbyReq", {lobby_id, public_key, signature});
    // const bound = generateBound($playerStore.public_key);

    // socket.emit("joinLobbyReq", {
    //   lobbyId,
    //   username: $playerStore.username,
    //   bound,
    //   socketId: $playerStore.account.socket_id,
    //   avatarId: $playerStore.account.avatar_id
    // });
  };
</script>

<Modal>
  <form>
    <input placeholder="Lobby ID" type="number" bind:value={lobby_id}>
    <button class="btn--raised-blue" on:click={join}>JOIN</button>
  </form>
</Modal>