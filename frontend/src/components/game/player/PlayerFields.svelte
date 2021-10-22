<script lang="ts">
  import Hero from "../Hero.svelte";
  import PlayerMagicField from "./PlayerMagicField.svelte";
  import PlayerMinionField from "./PlayerMinionField.svelte";
  import PlayerTrapField from "./PlayerTrapField.svelte";
</script>

<style>
  .player__fields {
    display: flex;
    padding: 0 0 var(--spacing-sm) var(--spacing-sm);
  }
</style>

<div class="player__fields">
  <PlayerTrapField/>
  <PlayerMinionField field="a"/>
  <PlayerMinionField field="b"/>
  <Hero/>
  <PlayerMinionField field="c"/>
  <PlayerMinionField field="d"/>
  <PlayerMagicField/>
</div>