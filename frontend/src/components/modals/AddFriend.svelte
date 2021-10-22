<script lang="ts">
  import {Modal} from "components";
  import {eccService, socketService} from "services";
  import {playerStore} from "stores/data";

  let friendname = "";

  const onAddFriend = (): void => {
    const {username, public_key, private_key} = $playerStore;
    const signature = eccService.sign(`addfriend:${friendname}`, private_key);

    socketService.emit("addFriend", {username, friendname, public_key, signature});
  };
</script>

<style>
  form {
    display: flex;
    flex-direction: row;
  }
</style>

<Modal>
  <form>
    <input class="input--green" placeholder="Username" bind:value={friendname}>
    <button class="btn--raised-accent" on:click={onAddFriend}>
      <i class="fas fa-paper-plane fa-fw"></i> SEND
    </button>
  </form>
</Modal>