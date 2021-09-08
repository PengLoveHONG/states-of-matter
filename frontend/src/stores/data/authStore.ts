import {writable} from "svelte/store";

import type {Writable} from "svelte/store";

interface SigninForm {
  username: string;
  password: string;
}

interface SignupForm {
  username: string;
  password: string;
}

interface Auth {
  signinForm: SigninForm;
  signupForm: SignupForm;
}

const auth: Writable<Auth> = writable({
  signinForm: {
    username: "",
    password: ""
  },
  signupForm: {
    username: "",
    password: ""
  }
});

export default auth;