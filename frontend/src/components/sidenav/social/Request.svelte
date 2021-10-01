<script lang="ts">
  import {FontAwesome} from "components";
  import {eccService, socketService} from "services";
  import {playerStore} from "stores/data";

  let username: string;

  const onAcceptFriend = (): void => {
    const {public_key, private_key} = $playerStore;
    const signature = eccService.sign(`acceptfriend:${username}`, private_key);

    socketService.emit("acceptFriend", {
      friendname: username,
      username: $playerStore.username,
      public_key,
      signature
    });
  };

  const onDeclineFriend = (): void => {
    const {public_key, private_key} = $playerStore;
    const signature = eccService.sign(`declfriend:${username}`, private_key);

    socketService.emit("declineFriend", {username, public_key, signature});
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