<script lang="ts">
  import {generateSignature} from "services/ecc";
  import {socket} from "services/socket";
  import {playerStore} from "stores";
  import social from "stores/social";

  const avatars = [0, 1, 2];

  const selectAvatar = (avatar: number): void => {
    const {username, public_key, private_key} = $playerStore;
    const {avatar_id} = $playerStore.account;
    const friendIds: Array<string> = [];
    const signature = generateSignature(`setavatar:${avatar}`, private_key);

    $social.friends.forEach(({socketId}) => {
      if (socketId) friendIds.push(socketId);
    });

    if (avatar_id !== avatar) {
      socket.emit("setAvatarReq", {
        avatar_id: avatar,
        friendIds,
        username,
        public_key,
        signature
      });
    }
  };
</script>

<style>
  .avatars {
    display: flex;
    padding: 8px 0 0 8px;
    box-sizing: border-box;
  }
  .avatar, .avatar__img {
    height: 64px;
    width: 64px;
    margin: 0 8px 8px 0;
    border-radius: 50%;
  }
  .avatar:hover {
    box-shadow: 0 0 4px 0 rgb(var(--purple));
    cursor: pointer;
  }
  .selected {
    box-shadow: 0 0 4px 0 rgb(var(--purple));
  }
</style>

<div class="avatars">
  {#each avatars as avatar}
    <div class={$playerStore.account.avatar_id === avatar ? "avatar selected" : "avatar"} on:click={() => selectAvatar(avatar)}>
      <img
        class="avatar__img"
        src="/assets/avatars/{avatar}.jpg"
        alt="Avatar {avatar}">
    </div>
  {/each}
</div>