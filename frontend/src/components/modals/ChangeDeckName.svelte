<script lang="ts">
  import {Modal} from "components";
  import {generateSignature} from "services/ecc";
  import {socket} from "services/socket";
  import modal from "stores/modal";
  import {playerStore} from "stores";

  let name = "";

  const onSetDeckName = (): void => {
    const {id} = $modal.data;
    const {public_key, private_key} = $playerStore;
    const signature = generateSignature(`setdeckname:${name}`, private_key);

    socket.emit("setDeckNameReq", {id, name, public_key, signature});
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