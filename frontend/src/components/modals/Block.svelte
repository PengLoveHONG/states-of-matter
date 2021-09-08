<script lang="ts">
  import {Modal} from "components";
  import {generateSignature} from "services/ecc";
  import {socket} from "services/socket";
  import modal from "stores/modal";
  import {playerStore} from "stores";

  const block = (): void => {
    const friendname = $modal.data.username;
    const friendSocketId = $modal.data.socketId;
    const {username, public_key, private_key} = $playerStore;
    const signature = generateSignature(
      `blockfriend:${friendname}`,
      private_key
    );

    socket.emit(
      "blockReq",
      {username, friendname, friendSocketId, public_key, signature}
    );
  };
</script>

<Modal>
  <p>
    Are you sure you want to block {$modal.data.username}?<br>
    Doing so will prevent them from sending you requests until you unblock them.
  </p>
  <button class="btn--raised-accent" on:click={block}>YES</button>
  <button class="btn--basic-accent">NO</button>
</Modal>