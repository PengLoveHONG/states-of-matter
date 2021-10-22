<script lang="ts">
  import {cardz} from "data";
  import {gameStore, playerStore} from "stores/data";
  import Card from "../Card.svelte";

  $: isntCurrentPlayerA = $gameStore.player_a.username !== $playerStore.username;
  $: isntCurrentPlayerB = $gameStore.player_b.username !== $playerStore.username;

  let field: string;

  const getCard = (player: string, field: string): any => {
    const card = cardz.find(({id}) => id === $gameStore[player].fields[field].id);
    const {gid} = $gameStore[player].fields[field];

    return {...card, gid};
  };

  const isntEmptyField = (player: string, field: string): boolean => {
    return $gameStore[player].fields[field].gid !== 0;
  };

  export {field};
</script>

<style>
  .minionfield {
    height: 208px;
    width: 160px;
    margin: var(--spacing-sm) var(--spacing-sm) 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(var(--orange));
    box-sizing: border-box;
  }
</style>

<div class="minionfield">
  {#if field === "a"}
    {#if isntCurrentPlayerA && isntEmptyField("player_a", "minion_a")}
      <Card card={getCard("player_a", "minion_a")}/>
    {:else if isntCurrentPlayerB && isntEmptyField("player_b", "minion_a")}
      <Card card={getCard("player_b", "minion_a")}/>
    {:else}
      <span class="f--orange">Minion Field {field}</span>
    {/if}
  {:else if field === "b"}
    {#if isntCurrentPlayerA && isntEmptyField("player_a", "minion_b")}
      <Card card={getCard("player_a", "minion_b")}/>
    {:else if isntCurrentPlayerB && isntEmptyField("player_b", "minion_b")}
      <Card card={getCard("player_b", "minion_b")}/>
    {:else}
      <span class="f--orange">Minion Field {field}</span>
    {/if}
  {:else if field === "c"}
    {#if isntCurrentPlayerA && isntEmptyField("player_a", "minion_c")}
      <Card card={getCard("player_a", "minion_c")}/>
    {:else if isntCurrentPlayerB && isntEmptyField("player_b", "minion_c")}
      <Card card={getCard("player_b", "minion_c")}/>
    {:else}
      <span class="f--orange">Minion Field {field}</span>
    {/if}
  {:else if field === "d"}
    {#if isntCurrentPlayerA && isntEmptyField("player_a", "minion_d")}
      <Card card={getCard("player_a", "minion_d")}/>
    {:else if isntCurrentPlayerB && isntEmptyField("player_b", "minion_d")}
      <Card card={getCard("player_b", "minion_d")}/>
    {:else}
      <span class="f--orange">Minion Field {field}</span>
    {/if}
  {/if}
</div>