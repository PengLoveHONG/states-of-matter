<script lang="ts">
  import {Modal} from "components";
  import {eccService, socketService} from "services";
  import {playerStore} from "stores/data";
  import {modalStore} from "stores/view";

  let name = "";

  const onSetDeckName = (): void => {
    const {id} = $modalStore.data;
    const {public_key, private_key} = $playerStore;
    const signature = eccService.sign(`setdeckname:${name}`, private_key);

    socketService.emit("setDeckNameReq", {id, name, public_key, signature});
  };
</script>

<Modal>
  <form>
    <div class="form__field">
      <label for="deckName">Deck name</label>
      <input
        id="deckName"
        placeholder="Deck name"
        name="deckName"
        type="text"
        bind:value={name}>
    </div>

    <div class="form__field">
      <button class="form__field__submit" on:click={onSetDeckName}>
        SET
      </button>
    </div>
  </form>
</Modal>