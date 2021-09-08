<script lang="ts">
  import {FontAwesome} from "components";
  import {showNotification} from "stores/notifications";
  import {playerStore} from "stores";

  let isPrivateKeyVisible = false;

  const onCopyPublicKey = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText($playerStore.public_key);
      showNotification("Copied to clipboard.");
    } catch (error) {
      console.error(error);
    }
  };

  const onTogglePrivateKeyVisible = (): void => {
    isPrivateKeyVisible = !isPrivateKeyVisible
  };

  const onCopyPrivateKey = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText($playerStore.private_key);
      showNotification("Copied to clipboard.");
    } catch (err) {
      console.error(err);
    }
  };
</script>

<style>
  .wallet {
    height: 100%;
    width: 100%;
    padding: var(--spacing-md);
    box-sizing: border-box;
  }

  .key {
    font-family: monospace;
  }
  .wallet__keys {
    display: flex;
    justify-content: space-evenly;
  }
  .wallet__key {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wallet__key__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>

<div class="wallet">

  <div class="wallet__keys">

    <div class="wallet__key">
      <header class="wallet__key__header">
        <p>
          Public Key
        </p>
        <div class="wallet__key__header__actions">
          <button class="btn--icon" on:click={onCopyPublicKey}>
            <FontAwesome icon="copy"/>
          </button>
        </div>
      </header>
      <h3 class="key f--purple">
        {$playerStore.public_key}
      </h3>
    </div>

    <div class="wallet__key">
      <header class="wallet__key__header">
        <p>
          Private Key
        </p>
        <div class="wallet__key__header__actions">
          <button class="btn--icon" on:click={onTogglePrivateKeyVisible}>
            <FontAwesome icon={isPrivateKeyVisible ? "eye" : "eye-slash"}/>
          </button>
          <button class="btn--icon" on:click={onCopyPrivateKey}>
            <FontAwesome icon="copy"/>
          </button>
        </div>
      </header>

      <h3 class="key f--purple">
        {#if isPrivateKeyVisible}
          {$playerStore.private_key}
        {:else}
          {$playerStore.private_key.split("").map(() => "*").join("")}
        {/if}
      </h3>
    </div>

  </div>

</div>