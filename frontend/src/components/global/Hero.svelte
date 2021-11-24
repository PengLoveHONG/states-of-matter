<script lang="ts">
  import type {Hero} from "models/view";

  let hero: Hero;
  enum heroKlass {SOLID = 1, LIQUID = 2, GAS = 3, PLASMA = 4};

  export {hero};
</script>

<style lang="scss">
  @import "../../styles/mixins";
  @import "../../styles/variables";

  $stat-dimension: 32px;

  .hero {
    position: relative;
    height: $game-card-height;
    width: $game-card-width;
    box-shadow: $elevation-sm;
    margin: 0 $spacing-md $spacing-md 0;

    &__header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: $spacing-sm;
      @include d-flex(row, center, space-between);
      background-color: rgb(var(--dark-grey), 0.9);
      box-sizing: border-box;
      cursor: pointer;
      font-size: $font-md;

      &__tooltip {
        display: none;
        position: absolute;
        top: 32px;
        left: 50%;
        height: auto;
        width: $game-card-width;
        padding: $spacing-sm;
        background-color: rgba(var(--light-grey), 0.95);
        box-shadow: $elevation-lg;
        font-size: $font-sm;
        transform: translateX(-50%);
      }

      &:hover &__tooltip { display: initial; }
    }

    &__img {
      height: $game-card-height;
      width: $game-card-width;
      display: block;
    }
  }

  .circle-stat-green,
  .circle-stat-orange,
  .circle-stat-red,
  .circle-stat-yellow,
  .circle-stat-purple,
  .circle-stat-blue,
  .circle-stat-gas {
    position: absolute;
    height: $stat-dimension;
    width: $stat-dimension;
    @include d-flex(column, center, center);
    background-color: rgba(var(--dark-grey), 0.9);
    border-radius: 50%;
    box-shadow: $elevation-sm;
    font-size: $font-sm;
  }

  .circle-ability {
    position: absolute;
background-color: rgba(var(--dark-grey), 0.9);
    border-radius: 50%;
    box-shadow: $elevation-md;
    cursor: pointer;
    font-size: $font-sm;
    @include d-flex(column, center, center);
    bottom: 48px;
    height: 48px;
    width: 48px;
    left: 50%;
    transform: translateX(-50%);
    border: 2px solid $purple;
    font-size: $font-md;
  }
  .circle-stat-yellow {
    bottom: $stat-dimension;
    left: 4px;
    border: 2px solid rgb(var(--yellow));
  }
  .circle-stat-green {
    bottom: 4px;
    right: $stat-dimension;
    border: 2px solid $green;
  }
  .circle-stat-orange {
    bottom: 4px;
    left: $stat-dimension;
    border: 2px solid $orange;
  }
  .circle-stat-red {
    bottom: $stat-dimension;
    left: 4px;
    border: 2px solid $red;
  }
  .circle-stat-gas {
    bottom: $stat-dimension;
    left: 4px;
    border: 2px solid #23835b;
  }
  .circle-stat-purple {
    bottom: $stat-dimension;
    left: 4px;
    border: 2px solid $purple;
  }
  .circle-stat-blue {
    bottom: $stat-dimension;
    right: 4px;
    border: 2px solid $blue;
  }
</style>

<div class="hero">
  <div class="hero__header">
    <span>{hero.name}</span>
    <div class="hero__header__tooltip">
      {@html hero.active}
    </div>
  </div>

  <img class="hero__img" src="assets/classes/{hero.klass}_hero.jpg" alt="Hero">

  <div class="circle-stat-green">
    <i class="fas fa-heart fa-fw"></i> <span>{hero.health}</span>
  </div>

  <div class="circle-stat-orange">
    <i class="fas fa-fire fa-fw"></i> <span>{hero.damage}</span>
  </div>

  <div class="circle-ability">
    <i class="fas fa-medkit fa-2x fa-fw"></i>
  </div>

  <div class="circle-stat-blue">
    <i class="fas fa-battery-full fa-fw"></i> <span>100</span>
  </div>

  {#if hero.klass === heroKlass.SOLID}
    <div class="circle-stat-yellow">
      <i class="fas fa-shield-alt fa-fw"></i> <span>{hero.passive.amount}</span>
    </div>
  {:else if hero.klass === heroKlass.LIQUID}
    <div class="circle-stat-purple">
      <i class="fas fa-tint fa-fw"></i> <span>{hero.passive.amount}</span>
    </div>
  {:else if hero.klass === heroKlass.GAS}
    <div class="circle-stat-gas">
      <i class="fas fa-radiation fa-fw"></i> <span>{hero.passive.amount}</span>
    </div>
  {:else if hero.klass === heroKlass.PLASMA}
    <div class="circle-stat-red">
      <i class="fas fa-khanda fa-fw"></i> <span>{hero.passive.amount} </span>
    </div>
  {/if}
</div>
