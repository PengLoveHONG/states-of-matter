import {get, writable} from "svelte/store";
import {status} from "models/data/Player";

import type {Writable} from "svelte/store";
import type {Social} from "models/view/Social";

const social: Writable<Social> = writable({
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

const getSocketIds = (): Array<string> => {
  return get(social).friends.reduce((acc, friend) => {
    if (friend.socketId) {acc.push(friend.socketId);}
    return acc;
  }, [] as Array<string>);
};

export default social;
export {getSocketIds};