import {Writable, writable} from "svelte/store";

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

const modal: Writable<ModalStore> = writable({
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

const openModal = (name: string, data: any = {}): void => {
  modal.update((store) => {
    store.current = name;
    store.data = data;
    store.list[name] = true;

    return store;
  });
};

const closeModal = (): void => {
  modal.update((store) => {
    store.list[store.current] = false;
    store.current = "";
    store.data = {};

    return store;
  });
};

export default modal;
export {openModal, closeModal};