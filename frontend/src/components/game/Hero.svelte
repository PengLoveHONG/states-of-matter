<script>
  import {onMount} from "svelte";

  let healthProgressLen = 0;
  let manaProgressLen = 0;
  let hp = 57;
  let mana = 4;

  $:hpOffset = healthProgressLen - (healthProgressLen / 100 * hp);
  $:manaOffset = manaProgressLen - (manaProgressLen / 10 * mana);

  onMount(() => {
    const healthProgress = document.getElementById("healthProgress");
    const manaProgress = document.getElementById("manaProgress");

    healthProgressLen = healthProgress.getTotalLength();
    manaProgressLen = manaProgress.getTotalLength();
  });
</script>

<style>
  #healthBar {
    stroke-dasharray: 565.4873657226562;
    stroke-dashoffset: 0;
  }
  #healthProgress {
    stroke-dasharray: 565.4873657226562;
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 1s ease;
  }
  #manaBar {
    stroke-dasharray: 150.76296997070312;
    stroke-dashoffset: 0;
  }
  #manaProgress {
    stroke-dasharray: 150.79638671875;
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 1s ease;
  }

  .hero {
    position: relative;
  }
  .hero__main {
    position: relative;
  }
  .hero__img {
    height: 192px;
    width: 192px;
    border-radius: 50%;
  }
  .hero__bar {
    position: absolute;
    top: 0;
    left: 0;
  }
  .hero__bar__mana {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    padding: var(--spacing-sm);
    text-align: center;
  }
  .hero__bar__health {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    padding: var(--spacing-sm);
    text-align: center;
  }
</style>

<div class="hero">

  <div class="hero__bar__health f--green">
    <i class="fas fa-heart"></i> {hp} / 100
  </div>

  <div class="hero__main">
    <img class="hero__img" src="assets/classes/4_hero.jpg" alt="Hero">

    <div class="hero__bar">
      <!-- <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="healthBar" d="M43.1472 212.853C26.3649 196.071 14.936 174.689 10.3058 151.411C5.67554 128.133 8.05194 104.005 17.1345 82.078C26.217 60.1508 41.5977 41.4094 61.3316 28.2236C81.0655 15.0379 104.266 8 128 8C151.734 8 174.935 15.0379 194.668 28.2236C214.402 41.4094 229.783 60.1509 238.866 82.078C247.948 104.005 250.324 128.133 245.694 151.411C241.064 174.689 229.635 196.071 212.853 212.853" stroke="#424242" stroke-width="16"/>
        <path id="healthProgress" style="stroke-dashoffset: {hpOffset}" d="M43.1472 212.853C26.3649 196.071 14.936 174.689 10.3058 151.411C5.67554 128.133 8.05194 104.005 17.1345 82.078C26.217 60.1508 41.5977 41.4094 61.3316 28.2236C81.0655 15.0379 104.266 8 128 8C151.734 8 174.935 15.0379 194.668 28.2236C214.402 41.4094 229.783 60.1509 238.866 82.078C247.948 104.005 250.324 128.133 245.694 151.411C241.064 174.689 229.635 196.071 212.853 212.853" stroke="#20995D" stroke-width="16"/>
        <path id="manaBar" d="M57.4658 225.082C77.9629 239.974 102.647 247.996 127.983 248C153.319 248.004 178.006 239.988 198.507 225.102" stroke="#424242" stroke-width="16"/>
        <path id="manaProgress" style="stroke-dashoffset: {manaOffset}" d="M57.4658 225.082C77.9675 239.977 102.658 248 128 248C153.342 248 178.033 239.977 198.534 225.082" stroke="#189DE7" stroke-width="16"/>
      </svg> -->
      <svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="healthBar" d="M33.7746 158.225C21.4676 145.918 13.0864 130.238 9.69089 113.168C6.2954 96.0976 8.03809 78.4038 14.6986 62.3239C21.3591 46.244 32.6383 32.5002 47.1098 22.8307C61.5813 13.1611 78.5952 8 96 8C113.405 8 130.419 13.1611 144.89 22.8307C159.362 32.5002 170.641 46.244 177.301 62.3239C183.962 78.4038 185.705 96.0976 182.309 113.168C178.914 130.238 170.532 145.918 158.225 158.225" stroke="#424242" stroke-width="16"/>
        <path id="healthProgress" style="stroke-dashoffset: {hpOffset}" d="M33.7746 158.225C21.4676 145.918 13.0864 130.238 9.69089 113.168C6.2954 96.0976 8.03809 78.4038 14.6986 62.3239C21.3591 46.244 32.6383 32.5002 47.1098 22.8307C61.5813 13.1611 78.5952 8 96 8C113.405 8 130.419 13.1611 144.89 22.8307C159.362 32.5002 170.641 46.244 177.301 62.3239C183.962 78.4038 185.705 96.0976 182.309 113.168C178.914 130.238 170.532 145.918 158.225 158.225" stroke="#20995D" stroke-width="16"/>
        <path id="manaBar" d="M44.2749 167.193C59.3061 178.114 77.4081 183.997 95.9877 184C114.567 184.003 132.671 178.125 147.705 167.208" stroke="#424242" stroke-width="16"/>
        <path id="manaProgress" style="stroke-dashoffset: {manaOffset}" d="M44.2749 167.193C59.3095 178.117 77.4162 184 96 184C114.584 184 132.691 178.117 147.725 167.193" stroke="#189DE7" stroke-width="16"/>
      </svg>
    </div>
  </div>

  <div class="hero__bar__mana f--blue">
    <i class="fas fa-vial"></i> {mana} / 10
  </div>

</div>

<!-- <form>
  <div class="form__field">
    <label for="heroHp">Health</label>
    <input id="heroHp" type="number" min="0" max="100" bind:value={hp}>
  </div>
  <div class="form__field">
    <label for="heroMana">Mana</label>
    <input id="heroMana" type="number" min="0" max="10" bind:value={mana}>
  </div>
</form> -->