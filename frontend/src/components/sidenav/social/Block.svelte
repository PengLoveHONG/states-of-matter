<script type="ts">
  import {FontAwesome} from "components";
  import {generateSignature} from "services/ecc";
  import {socket} from "services/socket";
  import {playerStore} from "stores";

  let friendname: string;

  const onUnblock = (): void => {
    const {public_key, private_key} = $playerStore;
    const signature = generateSignature(
      `unblckfriend:${friendname}`,
      private_key
    );

    socket.emit("unblockReq", {friendname, public_key, signature});
  };

  export {friendname};
</script>

<style>
  .block {
    margin-bottom: var(--spacing-sm);
    padding: var(--spacing-sm);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(var(--light-grey));
    border-radius: 4px;
    box-shadow: var(--elevation-sm);
  }
  .block:nth-last-child(1) {
    margin-bottom: 0;
  }
</style>

<div class="block">
  <p>
    {friendname}
  </p>
  <button class="btn--icon-accent" on:click={onUnblock}>
    <FontAwesome icon="trash"/>
  </button>
</div>