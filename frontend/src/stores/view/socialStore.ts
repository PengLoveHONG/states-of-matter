import {writable} from "svelte/store";
import {status} from "models/data/Player";

import type {Writable} from "svelte/store";
import type {Social} from "models/view/Social";

const socialStore: Writable<Social> = writable({
  friends: [],
  chat: {
    username: "",
    socketId: "",
    avatarId: 1,
    status: status.OFFLINE,
    isOpen: false,
    messages: []
  }
});

export default socialStore;