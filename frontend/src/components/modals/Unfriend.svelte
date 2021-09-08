<script lang="ts">
  import {Modal} from "components";
  import {generateSignature} from "services/ecc";
  import {socket} from "services/socket";
  import modal from "stores/modal";
  import {playerStore} from "stores";

  const unfriend = (): void => {
    const friendname = $modal.data.username;
    const friendSocketId = $modal.data.socketId;
    const {username, public_key, private_key} = $playerStore;
    const signature = generateSignature(`unfriend:${friendname}`, private_key);

    socket.emit(
      "unfriendReq",
      {username, friendname, friendSocketId, public_key, signature}
    );
  };
</script>

<Modal>
  <p>
    Are you sure you want to remove {$modal.data.username} from your
    friends list?
  </p>
  <button class="btn--raised-accent" on:click={unfriend}>YES</button>
  <button class="btn--basic-accent">NO</button>
</Modal>