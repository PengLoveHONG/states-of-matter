<script>
  import Hero from "../Hero.svelte";
  import MagicField from "./MagicField.svelte";
  import MinionField from "./MinionField.svelte";
  import TrapField from "./TrapField.svelte";

  export const selectedCard = undefined;
</script>

<style>
  .player__fields {
    display: flex;
    padding: 0 0 var(--spacing-sm) var(--spacing-sm);
  }
</style>

<div class="player__fields">
  <TrapField/>
  <MinionField field="A"/>
  <MinionField field="B"/>
  <!-- <MinionField field="C"/> -->
  <Hero/>
  <MinionField field="D"/>
  <MinionField field="E"/>
  <MagicField/>
</div>