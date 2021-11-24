<script lang="ts">
  import heroes from "data/heroes";
  import {eccService, miscService, socketService} from "services";
  import {playerStore} from "stores/data";

  let deck;
  const hero = heroes.get(deck.klass);

  const selectDeck = (id: number): void => {
    const {public_key, private_key} = $playerStore;
    const deck_id = id;
    const signature = eccService.sign(`selectdeck:${deck_id}`, private_key);

    socketService.emit("selectDeck", {deck_id, public_key, signature});
  };

  const changeDeckName = (id: number): void => {
    miscService.openModal("changeDeckName", {id});
  };

  const changeDeckClass = (id: number): void => {
    miscService.openModal("setDeckKlass", {id});
  };

  export {deck};
</script>

<style lang="scss">
  @import "../../../../styles/mixins";
  @import "../../../../styles/variables";

  .deck {
    position: relative;
    /* height: 320px; */
    width: 160px;
    margin: 0 var(--spacing-md) var(--spacing-md) 0;
    box-shadow: var(--elevation-sm);
    overflow: hidden;
    transition: box-shadow 225ms ease-in-out;
  }
  .deck:hover {
    box-shadow: var(--elevation-md);
  }
  .deck__footer {
    width: 100%;
    padding: var(--spacing-md);
    display: flex;
    background-size: 100%;
    background-image: linear-gradient(to top, rgba(21, 21, 21, 1), rgba(21, 21, 21, 0.5));
    box-sizing: border-box;
    z-index: 1;
    font-size: $font-md;
  }
  .deck__footer__info {
    flex-grow: 1;
    /* display: flex;
    justify-content: space-around; */
  }
  .deck__footer__actions {
    display: flex;
    align-items: center;
  }

  .hero {
    position: relative;
    height: $game-field-height;
    width: $game-field-width;
    box-shadow: $elevation-sm;
    margin: 0 var(--spacing-md) var(--spacing-md) 0;

    &__img {
      height: $game-field-height;
      width: $game-field-width;
      display: block;
    }
  }

  $stat-dimension: 32px;

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
    box-shadow: $elevation-md;
    cursor: pointer;
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

  .header {
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

    &:hover .tooltip { display: initial; }
    // font-size: $font-md;
  }
  .tooltip {
    display: none;
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
    height: auto;
    width: 180px;
    padding: var(--spacing-sm);
    background-color: rgba(var(--light-grey), 0.95);
    box-shadow: var(--elevation-lg);
    font-size: 12px;
    z-index: 100;
  }
</style>

<!-- <div class="deck">
  <img
    class="deck__image"
    src="assets/classes/{deck.klass}_hero.jpg"
    alt="Deck"
    on:click={() => selectDeck(deck.id)}>
  <div class="deck__footer">
    <div class="deck__footer__info">
      <div>{deck.name}</div>
      <div>
        {deck.cardsInDeck} / 30
        {#if deck.cardsInDeck < 30}
          <i class="fas fa-exclamation fa-fw"></i>
        {:else}
          <i class="fas fa-check fa-fw"></i>
        {/if}
      </div>
    </div>

    <div class="deck__footer__actions">
      <button class="btn--icon" on:click={() => changeDeckClass(deck.id)}>
        <i class="fas fa-mask fa-fw"></i>
      </button>
      <button class="btn--icon" on:click={() => changeDeckName(deck.id)}>
        <i class="fas fa-edit fa-fw"></i>
      </button>
    </div>
  </div>

</div> -->




<!-- <div class="deck"> -->
  <div class="hero" on:click={() => selectDeck(deck.id)}>
    <div class="header">
      <span>{hero.name}</span>
      <i class="fas fa-mask fa-fw"></i>
  
      <div class="tooltip">
        {@html hero.special.effect}
      </div>
    </div>
  
    <img class="hero__img" src="assets/classes/{deck.klass}_hero.jpg" alt="Hero">
  
    <div class="circle-stat-green" data-tooltip="Health">
      <div>
        <i class="fas fa-heart"></i>
      </div>
      <div>
        {hero.hp}
      </div>
    </div>
  
    <div class="circle-stat-orange" data-tooltip="Damage">
      <div>
        <i class="fas fa-fire"></i>
      </div>
      <div>
        {hero.damage}
      </div>
    </div>
  
    <div class="circle-ability" data-tooltip="Special Ability">
      <i class="fas fa-medkit fa-2x fa-fw"></i>
    </div>
  
    <div class="circle-stat-blue" data-tooltip="Mana">
      <div>
        <i class="fas fa-battery-full"></i>
      </div>
      <div>
        100
      </div>
    </div>
  
    {#if deck.klass === 1}
      <div class="circle-stat-yellow">
        <div>
          <i class="fas fa-shield-alt"></i>
        </div>
        <div>
          {hero.special.amount}
        </div>
      </div>
    {:else if deck.klass === 2}
      <div class="circle-stat-purple">
        <div>
          <i class="fas fa-tint"></i>
        </div>
        <div>
          {hero.special.amount}
        </div>
      </div>
    {:else if deck.klass === 3}
      <div class="circle-stat-gas">
        <div>
          <i class="fas fa-radiation"></i>
        </div>
        <div>
          {hero.special.amount}
        </div>
      </div>
    {:else if deck.klass === 4}
      <div class="circle-stat-red">
        <div>
          <i class="fas fa-khanda"></i>
        </div>
        <div>
          {hero.special.amount}
        </div>
      </div>
    {/if}
    

    <div class="deck__footer">
      <div class="deck__footer__info">
        <div>{deck.name}</div>
        <div>
          {deck.cardsInDeck} / 30
          {#if deck.cardsInDeck < 30}
            <i class="fas fa-exclamation fa-fw"></i>
          {:else}
            <i class="fas fa-check fa-fw"></i>
          {/if}
        </div>
      </div>
    
      <div class="deck__footer__actions">
        <button class="btn--icon" on:click={() => changeDeckClass(deck.id)}>
          <i class="fas fa-exchange-alt fa-fw"></i>
        </button>
        <button class="btn--icon" on:click={() => changeDeckName(deck.id)}>
          <i class="fas fa-edit fa-fw"></i>
        </button>
      </div>
    </div>
  </div>
 
  
<!-- </div> -->
