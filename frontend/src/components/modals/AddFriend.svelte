<script lang="ts">
  import {Modal} from "components";
  import {eccService, miscService, socketService} from "services";
  import {playerStore} from "stores/data";

  const form = {friendname: ""};

  const onAddFriend = (): void => {
    const {friendname} = form;

    // Move these checks to the smart contract.
    if (!friendname) {
      miscService.showNotification("Username field can't be empty.");
    } else if ($playerStore.username === friendname) {
      miscService.showNotification("You can't add yourself as a friend.");
    } else if ($playerStore.social.friends.includes(friendname)) {
      miscService.showNotification("User is already in your friends list.");
    } else if ($playerStore.social.requests.includes(friendname)) {
      miscService.showNotification("User already sent you a request.");
    } else if ($playerStore.social.blocked.includes(friendname)) {
      miscService.showNotification("This user is being blocked.");
    } else {
      const {username, public_key, private_key} = $playerStore;
      const signature = eccService.sign(`addfriend:${friendname}`, private_key);

      socketService.emit("addFriend", {username, friendname, public_key, signature});
    }
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
    <input class="input--green" placeholder="Username" bind:value={form.friendname}>
    <button class="btn--raised-accent" on:click={onAddFriend}>
      <i class="fas fa-paper-plane fa-fw"></i> SEND
    </button>
  </form>
</Modal>