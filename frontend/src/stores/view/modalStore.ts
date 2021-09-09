import {writable} from "svelte/store";

import type {Writable} from "svelte/store";

interface ModalStore {
  data: any;
  current: string;
  list: {
    addFriend: boolean;
    block: boolean
    changeDeckName: boolean;
    gift: boolean;
    joinCustom: boolean;
    setDeckKlass: boolean;
    tip: boolean;
    unfriend: boolean;
  };
}

const modalStore: Writable<ModalStore> = writable({
  data: {},
  current: "",
  list: {
    addFriend: false,
    block: false,
    changeDeckName: false,
    gift: false,
    joinCustom: false,
    setDeckKlass: false,
    tip: false,
    unfriend: false
  }
});

export default modalStore;