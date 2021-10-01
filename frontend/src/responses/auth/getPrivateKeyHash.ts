import {get} from "svelte/store";
import {cryptoService, eccService, miscService, socketService} from "services";
import {authStore, playerStore} from "stores/data";

interface Params { private_key_hash: string; }

const getPrivateKeyHash = (params: Params): void => {
  const {private_key_hash} = params;
  const {username, password} = get(authStore).signinForm;
  const private_key = cryptoService.decrypt(private_key_hash, password);

  if (private_key) {
    const public_key = eccService.toPublic(private_key);
    const signature = eccService.sign(`signin:${username}`, private_key);
    const signout = eccService.sign(`signout:${username}`, private_key);
    const signatures = {signout};

    playerStore.update((store) => {
      store.private_key = private_key;
      return store;
    });

    socketService.emit("signin", {username, public_key, signature, signatures});
  } else {
    miscService.showNotification("Wrong password.");
  }
};

export default getPrivateKeyHash;