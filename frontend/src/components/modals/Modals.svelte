<script lang="ts">
  import AddFriend from "./AddFriend.svelte";
  import Block from "./Block.svelte";
  import ChangeDeckName from "./ChangeDeckName.svelte";
  import Gift from "./Gift.svelte";
  import JoinCustom from "./JoinCustom.svelte";
  import SetDeckKlass from "./SetDeckKlass.svelte";
  import Tip from "./Tip.svelte";
  import Unfriend from "./Unfriend.svelte";

  import modal from "stores/view/modalStore";
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