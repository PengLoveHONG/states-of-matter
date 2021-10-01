<script lang="ts">
  import {FontAwesome, Modal} from "components";
  import {eccService, socketService} from "services";
  import {playerStore} from "stores/data";
  import {modalStore} from "stores/view";

  const onSetDeckKlass = (klass: number): void => {
    const {id} = $modalStore.data;
    const {public_key, private_key} = $playerStore;
    const signature = eccService.sign(`setdeckklass:${klass}`, private_key);

    socketService.emit("setDeckKlass", {id, klass, public_key, signature});
  };
</script>

<style>
  .klasses {
    display: flex;
    flex-direction: column;
  }
  .klass {
    margin-bottom: var(--spacing-md);
    padding: var(--spacing-md);
    display: flex;
    align-items: center;
    background-color: rgb(var(--grey));
    border-radius: 4px;
    box-shadow: var(--elevation-sm);
    cursor: pointer;
    transition:
      background-color 225ms ease-in-out,
      box-shadow 225ms ease-in-out;
  }
  .klass:last-child {
    margin-bottom: 0;
  }
  .klass:hover {
    background-color: rgb(var(--dark-grey));
    box-shadow: var(--elevation-md);
  }
  .klass__img {
    height: 64px;
    width: 64px;
    margin-right: var(--spacing-md);
  }
</style>

<Modal>
  <div class="klasses">
    <div class="klass" on:click={() => onSetDeckKlass(1)}>
      <img class="klass__img" src="assets/classes/1.png" alt="Solid">
      <div>
        <p>Solid</p>
        <p class="f--yellow"><FontAwesome icon="shield-alt"/> % Damage Reduction</p>
      </div>
    </div>
    <div class="klass" on:click={() => onSetDeckKlass(2)}>
      <img class="klass__img" src="assets/classes/2.png" alt="Liquid">
      <div>
        <p>Liquid</p>
        <p class="f--purple"><FontAwesome icon="tint"/> % Absorb Chance</p>
      </div>
    </div>
    <div class="klass" on:click={() => onSetDeckKlass(3)}>
      <img class="klass__img" src="assets/classes/3.png" alt="Gas">
      <div>
        <p>Gas</p>
        <p class="f--orange"><FontAwesome icon="radiation"/> Neurotoxin</p>
      </div>
    </div>
    <div class="klass" on:click={() => onSetDeckKlass(4)}>
      <img class="klass__img" src="assets/classes/4.png" alt="Plasma">
      <div>
        <p>Plasma</p>
        <p class="f--red"><FontAwesome icon="khanda"/> Critical Strike Chance</p>
      </div>
    </div>
  </div>
  <br>
  <p><i>* Changing deck class will also clear the deck.</i></p>
</Modal>