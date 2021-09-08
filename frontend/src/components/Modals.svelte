<script lang="ts">
  import AddFriend from "./modals/AddFriend.svelte";
  import Block from "./modals/Block.svelte";
  import ChangeDeckName from "./modals/ChangeDeckName.svelte";
  import Gift from "./modals/Gift.svelte";
  import JoinCustom from "./modals/JoinCustom.svelte";
  import SetDeckKlass from "./modals/SetDeckKlass.svelte";
  import Tip from "./modals/Tip.svelte";
  import Unfriend from "./modals/Unfriend.svelte";

  import modal from "stores/modal";
</script>

{#if $modal.list.addFriend}
  <AddFriend/>
{/if}

{#if $modal.list.block}
  <Block/>
{/if}

{#if $modal.list.changeDeckName}
  <ChangeDeckName/>
{/if}

{#if $modal.list.gift}
  <Gift/>
{/if}

{#if $modal.list.joinCustom}
  <JoinCustom/>
{/if}

{#if $modal.list.setDeckKlass}
  <SetDeckKlass/>
{/if}

{#if $modal.list.tip}
  <Tip/>
{/if}

{#if $modal.list.unfriend}
  <Unfriend/>
{/if}