<script lang="ts">
  let hero, klass;

  export {hero, klass};
</script>

<style>
  .hero {
    height: 256px;
    width: calc(192px * 2 + var(--spacing-md) * 3);
    display: flex;
    margin: 0 0 var(--spacing-md) var(--spacing-md);
    background-color: rgb(var(--dark-grey));
    box-shadow: var(--elevation-md);
  }
  .hero__effect {
    padding: var(--spacing-sm);
    font-size: 0.8rem;
  }
  .hero__main {
    position: relative;
  }

  .circle-stat-green, .circle-stat-orange, .circle-stat-red, .circle-stat-purple {
    height: 40px;
    width: 40px;
    /* padding: 16px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(var(--green));
    box-shadow: var(--elevation-sm);
    border-radius: 50%;
    font-size: 0.8rem;
  }
  .circle-stat-orange {
    background-color: rgb(var(--orange));
  }
  .circle-stat-red {
    background-color: rgb(var(--red));
  }
  .circle-stat-purple {
    background-color: rgb(var(--purple));
  }
  .hero__stats {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
  }
  .hero__name {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: var(--spacing-sm);
    background-color: rgba(0, 0, 0, 0.25);
  }
  .hero__img {
    height: 100%;
    width: 192px;
  }
</style>

<div class="hero">
  <main class="hero__main">

    <div class="hero__name">
      <i class="fas fa-hat-wizard"></i> {hero.name}
    </div>

    <img class="hero__img" src="assets/classes/{klass}_hero.jpg" alt="Hero">

    <div class="hero__stats">

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

      {#if klass === 1}
        <div class="stat f--yellow">
          <i class="fas fa-shield-alt fa-fw"></i> {hero.special.amount}
        </div>
      {:else if klass === 2}
        <div class="stat f--purple">
          <i class="fas fa-tint"></i> {hero.special.amount}
        </div>
      {:else if klass === 3}
        <div class="stat f--orange">
          <i class="fas fa-radiation"></i> {hero.special.amount}
        </div>
      {:else if klass === 4}
        <div class="circle-stat-red">
          <div>
            <i class="fas fa-khanda"></i>
          </div>
          <div>
            {hero.special.amount}%
          </div>
        </div>
      {/if}

      <div class="circle-stat-purple">
        <div>
          <i class="fas fa-magic"></i>
        </div>
        <!-- <div>
          {hero.damage}
        </div> -->
      </div>

    </div>
  </main>
  <div>
    <p class="hero__effect">
      {#if klass === 1}
        <span class="stat f--yellow">
          <i class="fas fa-shield-alt fa-fw"></i>
        </span>
      {:else if klass === 2}
        <span class="stat f--purple">
          <i class="fas fa-tint"></i>
        </span>
      {:else if klass === 3}
        <span class="stat f--orange">
          <i class="fas fa-radiation"></i>
        </span>
      {:else if klass === 4}
        <span class="stat f--red">
          <i class="fas fa-khanda"></i>
        </span>
      {/if}
      {hero.special.name}
      <!-- <img class="hero__icon" src="assets/classes/{klass}.png" alt="Class"> {hero.special.name} -->
      <br><br>
      {@html hero.special.effect}
    </p>
  </div>
</div>