<script lang="ts">
  import {miscService} from "services";

  const exit = (): void => { miscService.closeModal(); };
</script>

<style>
  .wrapper--modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 5;
  }
  .modal {
    width: 320px;
    padding: var(--spacing-md);
    background-color: rgb(var(--light-grey));
    border-radius: 4px;
    box-shadow: var(--elevation-lg);
    z-index: 6;
  }
</style>

<div class="wrapper--modal" on:click={exit}>
  <div class="modal" on:click|preventDefault|stopPropagation={() => false}>
    <slot/>
  </div>
</div>