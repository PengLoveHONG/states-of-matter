<script lang="ts">
  import {quadInOut} from "svelte/easing";
  import {slide} from "svelte/transition";
  import type {SlideParams} from "svelte/transition";
  import {FontAwesome} from "components";
  import {status} from "models/Player";
  import type {Friend} from "models/Social";
  import {openModal} from "stores/modal";
  import social from "stores/social";

  let friend: Friend;
  let isActionsVisible = false;
  const transitionSlide: SlideParams = {duration: 333, easing: quadInOut};

  const onToggleActions = (): void => {
    isActionsVisible = !isActionsVisible;
  };

  const onChat = (): void => {
    const {username, socketId, status, avatarId, messages} = friend;

    isActionsVisible = !isActionsVisible;

    if ($social.chat.username === username) {
      $social.chat.isOpen = true;
    } else {
      const isOpen = true;
      $social.chat = {username, status, socketId, avatarId, isOpen, messages};
    }
  };

  export {friend};
</script>

<style>
  .friend {
    margin-bottom: var(--spacing-sm);
    padding: var(--spacing-sm);
    display: flex;
    flex-direction: column;
    background-color: rgb(var(--light-grey));
    border-radius: 4px;
    box-shadow: var(--elevation-sm);
  }
  .friend:nth-last-child(1) {
    margin-bottom: 0;
  }

  .friend__main {
    display: flex;
    align-items: center;
  }
  .friend__main__avatar {
    height: 64px;
    width: 64px;
    overflow: hidden;
  }
  .friend__main__avatar__img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
  .friend__main__info {
    margin-left: var(--spacing-sm);
    flex-grow: 1;
  }
  .friend__main__info__username {
    margin-bottom: var(--spacing-xsm);
  }

  .friend__actions {
    width: 100%;
    margin-top: var(--spacing-sm);
    display: flex;
    justify-content: center;
  }
</style>

<div class="friend">

  <div class="friend__main">

    <div class="friend__main__avatar">
      <img
        class="friend__main__avatar__img"
        src="assets/avatars/{friend.avatarId}.jpg"
        alt="{friend.username} avatar">
    </div>

    <div class="friend__main__info">
      <p class="friend__main__info__username">
        {friend.username}
      </p>
      <p>
        {#if friend.status === status.OFFLINE}
          <span class="f--grey"><FontAwesome icon="circle"/> Offline</span>
        {:else if friend.status === status.ONLINE}
          <span class="f--green"><FontAwesome icon="circle"/> Online</span>
        {:else if friend.status === status.INLOBBY}
          <span class="f--blue"><FontAwesome icon="circle"/> In lobby</span>
        {:else if friend.status === status.INGAME}
          <span class="f--orange"><FontAwesome icon="circle"/> In game</span>
        {/if}
      </p>
    </div>

    <button class="btn--icon" on:click={onChat}>
      <FontAwesome icon={isActionsVisible ? "times" : "comment"}/>
    </button>

  </div>

  <!-- {#if isActionsVisible}
    <div class="friend__actions" transition:slide={transitionSlide}>

      <button class="btn--icon" on:click={onChat}>
        <FontAwesome icon="comment"/>
      </button>

      

    </div>
  {/if} -->
</div>