<script lang="ts">
  import {Modal} from "components";
  import {eccService, socketService} from "services";
  import {playerStore} from "stores/data";
  import {modalStore} from "stores/view";

  const onUnfriend = (): void => {
    const friendname = $modalStore.data.username;
    const {username, public_key, private_key} = $playerStore;
    const signature = eccService.sign(`unfriend:${friendname}`, private_key);

    socketService.emit("unfriend", {username, friendname, public_key, signature});
  };
</script>

<Modal>
  <p>
    Are you sure you want to remove {$modalStore.data.username} from your
    friends list?
  </p>
  <button class="btn--raised-accent" on:click={onUnfriend}>YES</button>
  <button class="btn--basic-accent">NO</button>
</Modal>