import {get} from "svelte/store";
import {decryptPrivateKeyHash} from "services/crypto";
import {generateSignature, privateToPublic} from "services/ecc";
import {socket} from "services/socket";
import {showNotification} from "stores/notifications";
import {authStore, playerStore} from "stores";

interface Params { private_key_hash: string; }

const getPrivateKeyHash = (params: Params): void => {
  const {private_key_hash} = params;
  const {username, password} = get(authStore).signinForm;
  const private_key = decryptPrivateKeyHash(private_key_hash, password);

  if (private_key) {
    const public_key = privateToPublic(private_key);
    const signature = generateSignature(`signin:${username}`, private_key);

    playerStore.update((store) => {
      store.private_key = private_key;
      return store;
    });

    socket.emit("signinReq", {username, public_key, signature});
  } else {
    showNotification("Wrong password.");
  }
};

export default getPrivateKeyHash;