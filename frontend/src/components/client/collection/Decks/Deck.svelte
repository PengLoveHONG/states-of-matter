<script lang="ts">
  import heroes from "data/heroes";
  import {socket} from "services/socket";
  import {generateSignature} from "services/ecc";
  import {openModal} from "stores/modal";
  import {playerStore} from "stores";

  let deck;
  const hero = heroes.get(deck.klass);

  const selectDeck = (id: number): void => {
    const {username, public_key, private_key} = $playerStore;
    const deck_id = id;
    const signature = generateSignature(`selectdeck:${deck_id}`, private_key);

    socket.emit("selectDeckReq", {deck_id, public_key, signature});
  };

  const changeDeckName = (id: number): void => {
    openModal("changeDeckName", {id});
  };

  const changeDeckClass = (id: number): void => {
    openModal("setDeckKlass", {id});
  };

  export {deck};
</script>

<style>
  .deck {
    position: relative;
    /* height: 320px; */
    width: 256px;
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
    height: 256px;
    width: 100%;
    /* display: flex; */
    /* margin: 0 0 var(--spacing-md) var(--spacing-md); */
    background-color: rgb(var(--dark-grey));
    box-shadow: var(--elevation-md);
    position: relative;

    border: 1px solid red;
  }
  .hero__img {
    height: 256px;
    width: 100%;
  }

  .circle-stat-green,
  .circle-stat-orange,
  .circle-stat-red,
  .circle-stat-yellow,
  .circle-stat-purple,
  .circle-stat-magic {
    position: absolute;
    height: 40px;
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: var(--elevation-md);
    border-radius: 50%;
    cursor: pointer;
    font-size: 0.8rem;
  }

  .circle-stat-magic:hover .tooltip {
    display: initial;
  }
  .circle-stat-yellow {
    bottom: -5%;
    left: calc(50% - 40px / 2);
    background-color: rgb(var(--yellow));
  }
  .circle-stat-green {
    bottom: 0;
    right: 0;
    background-color: rgb(var(--green));
  }
  .circle-stat-orange {
    bottom: 0;
    left: 0;
    background-color: rgb(var(--orange));
  }
  .circle-stat-red {
    bottom: -5%;
    left: calc(50% - 40px / 2);
    background-color: rgb(var(--red));
  }
  .circle-stat-purple {
    top: 0;
    left: 0;
    background-color: rgb(var(--purple));
  }
  .circle-stat-magic {
    top: 0;
    right: 0;
    background-color: rgb(var(--purple));
  }

  .tooltip {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    height: auto;
    width: 180px;
    padding: var(--spacing-sm);
    background-color: rgb(var(--light-grey));
    box-shadow: var(--elevation-lg);
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

<div class="deck">
  <div class="hero" on:click={() => selectDeck(deck.id)}>

    <img
      class="hero__img"
      src="assets/classes/{deck.klass}_hero.jpg"
      alt="Hero">

    <div class="circle-stat-purple">
      <i class="fas fa-mask"></i>
    </div>

    <div class="circle-stat-green">
      <div>
        <i class="fas fa-heart"></i>
      </div>
      <div>
        {hero.hp}
      </div>
    </div>

    <div class="circle-stat-orange">
      <div>
        <i class="fas fa-fire"></i>
      </div>
      <div>
        {hero.damage}
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
      <div class="stat f--orange">
        <i class="fas fa-radiation"></i> {hero.special.amount}
      </div>
    {:else if deck.klass === 4}
      <div class="circle-stat-red">
        <div>
          <i class="fas fa-khanda"></i>
        </div>
        <div>
          {hero.special.amount}%
        </div>
      </div>
    {/if}

    <div class="circle-stat-magic">
      <div>
        <i class="fas fa-magic"></i>
      </div>
      <div class="tooltip">
        <div>
          {hero.name}
        </div>
        <div>
          {@html hero.special.effect}
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <p class="hero__effect">
      {#if deck.klass === 1}
        <span class="stat f--yellow">
          <i class="fas fa-shield-alt fa-fw"></i>
        </span>
      {:else if deck.klass === 2}
        <span class="stat f--purple">
          <i class="fas fa-tint"></i>
        </span>
      {:else if deck.klass === 3}
        <span class="stat f--orange">
          <i class="fas fa-radiation"></i>
        </span>
      {:else if deck.klass === 4}
        <span class="stat f--red">
          <i class="fas fa-khanda"></i>
        </span>
      {/if}
      {hero.special.name}
      <img class="hero__icon" src="assets/classes/{klass}.png" alt="Class"> {hero.special.name}
      <br><br>
      {@html hero.special.effect}
    </p>
  </div> -->
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
