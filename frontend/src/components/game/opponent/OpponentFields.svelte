<script lang="ts">
  import Hero from "../Hero.svelte";
  import OpponentMagicField from "./OpponentMagicField.svelte";
  import OpponentMinionField from "./OpponentMinionField.svelte";
  import OpponentTrapField from "./OpponentTrapField.svelte";
</script>

<style>
  .player__fields {
    display: flex;
    padding: 0 0 var(--spacing-sm) var(--spacing-sm);
  }
</style>

<div class="player__fields">
  <OpponentMagicField/>
  <OpponentMinionField field="d"/>
  <OpponentMinionField field="c"/>
  <Hero/>
  <OpponentMinionField field="b"/>
  <OpponentMinionField field="a"/>
  <OpponentTrapField/>
</div>