import {Writable, writable} from "svelte/store"

interface Notification {
  id: number;
  msg: string;
}

const notifications: Writable<Array<Notification>> = writable([]);

const showNotification = (msg: string): void => {
  notifications.update((store) => {
    const id = store.length;

    store.push({id, msg});

    return store;
  });

  setTimeout((): void => {
    notifications.update((store) => {
      const id = store.length;

      const notification = store.find((notification) => notification.id === id);
      const i = store.indexOf(notification);

      store.splice(i, 1);

      return store;
    });
  }, 10000);
};

export default notifications;
export {showNotification};