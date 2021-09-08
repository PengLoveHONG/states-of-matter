<script lang="ts">
  import {createEventDispatcher} from "svelte";
  import {socket} from "services/socket";
  import {authStore} from "stores";

  const dispatch = createEventDispatcher();

  const onSignup = (): void => { socket.emit("signupReq", $authStore.signupForm); };
  const onGotoSignin = (): void => { dispatch("gotoSignin"); };
</script>

<style>
  form {
    width: 320px;
  }
  span {
    cursor: pointer;
  }
</style>

<form>
  <h3>Sign up</h3>

  <div class="form__field">
    <label for="signupUsername">Username</label>
    <input
      id="signupUsername"
      placeholder="Username"
      name="username"
      type="text"
      maxlength="12"
      bind:value={$authStore.signupForm.username}>
    <p>
      <i>* Characters allowed: a-z 1-5 . (dot)</i><br>
      <i>* Maximum 12 characters</i><br>
    </p>
  </div>

  <div class="form__field">
    <label for="signupPassword">Password</label>
    <input
      id="signupPassword"
      placeholder="Password"
      name="password"
      type="password"
      bind:value={$authStore.signupForm.password}>
  </div>

  <div class="form__field">
    <button class="form__field__submit btn--raised-primary" on:click|preventDefault={onSignup}>
      SIGN UP
    </button>
  </div>

</form>
<p>
  Already have an account?
  <span class="f--purple" on:click={onGotoSignin}>Sign in</span>
</p>