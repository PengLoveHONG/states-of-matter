<script lang="ts">
  import {Modal} from "components";
  import {socket} from "services/socket";
  import {showNotification} from "stores/notifications";
  import {playerStore} from "stores";
import { generateSignature } from "services/ecc";

  const form = {friendname: ""};

  const addFriend = (): void => {
    const {friendname} = form;

    if (!friendname) {
      showNotification("Username field can't be empty.");
    } else if ($playerStore.username === friendname) {
      showNotification("You can't add yourself as a friend.");
    } else if ($playerStore.social.friends.includes(friendname)) {
      showNotification("User is already in your friends list.");
    } else if ($playerStore.social.blocked.includes(friendname)) {
      showNotification("This user is being blocked.");
    } else {
      const {public_key, private_key} = $playerStore;
      const signature = generateSignature(
        `addfriend:${friendname}`,
        private_key
      );

      socket.emit("addFriendReq", {friendname, public_key, signature});
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
    <button class="btn--raised-accent" on:click={addFriend}>
      <i class="fas fa-paper-plane fa-fw"></i> SEND
    </button>
  </form>
</Modal>