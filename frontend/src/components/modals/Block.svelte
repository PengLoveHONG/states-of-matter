<script lang="ts">
  import {Modal} from "components";
  import {eccService, socketService} from "services";
  import {playerStore} from "stores/data";
  import {modalStore} from "stores/view";

  const block = (): void => {
    const friendname = $modalStore.data.username;
    const friendSocketId = $modalStore.data.socketId;
    const {username, public_key, private_key} = $playerStore;
    const signature = eccService.sign(`blockfriend:${friendname}`, private_key);

    socketService.emit(
      "blockReq",
      {username, friendname, friendSocketId, public_key, signature}
    );
  };
</script>

<Modal>
  <p>
    Are you sure you want to block {$modalStore.data.username}?<br>
    Doing so will prevent them from sending you requests until you unblock them.
  </p>
  <button class="btn--raised-accent" on:click={block}>YES</button>
  <button class="btn--basic-accent">NO</button>
</Modal>