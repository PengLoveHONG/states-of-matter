<script lang="ts">
  import Signin from "./Signin.svelte";
  import Signup from "./Signup.svelte";

  let view = "Signin";

  const onGotoSignup = (): void => { view = "Signup"; };
  const onGotoSignin = (): void => { view = "Signin"; };
</script>

<style>
  .auth {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="auth">
  {#if view === "Signin"}
    <Signin on:gotoSignup={onGotoSignup}/>
  {:else if view === "Signup"}
    <Signup on:gotoSignin={onGotoSignin}/>
  {/if}
</div>