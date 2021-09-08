<script lang="ts">
  import {FontAwesome} from "components";
  import {generateSignature} from "services/ecc";
  import {socket} from "services/socket";
  import {playerStore} from "stores";

  let username: string;

  const onAcceptFriend = (): void => {
    const {public_key, private_key} = $playerStore;
    const signature = generateSignature(
      `acceptfriend:${username}`,
      private_key
    );

    socket.emit("acceptFriendReq", {
      friendname: username,
      friendSocketId: "",
      username: $playerStore.username,
      public_key,
      signature
    });
  };

  const onDeclineFriend = (): void => {
    const {public_key, private_key} = $playerStore;
    const signature = generateSignature(`declfriend:${username}`, private_key);

    socket.emit("declineFriendReq", {username, public_key, signature});
  };

  export {username};
</script>

<style>
  .request {
    margin-bottom: var(--spacing-sm);
    padding: var(--spacing-sm);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(var(--light-grey));
    border-radius: 4px;
    box-shadow: var(--elevation-sm);
  }
  .request:nth-last-child(1) {
    margin-bottom: 0;
  }
</style>

<div class="request">
  <p>
    {username}
  </p>
  <div>
    <button class="btn--icon-accent" on:click={onAcceptFriend}>
      <FontAwesome icon="check"/>
    </button>
    <button class="btn--icon-accent" on:click={onDeclineFriend}>
      <FontAwesome icon="trash"/>
    </button>
  </div>
</div>