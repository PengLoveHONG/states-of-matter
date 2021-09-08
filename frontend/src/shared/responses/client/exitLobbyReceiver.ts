import {lobbyStore} from "stores";

const exitLobbyReceiver = (): void => {
  lobbyStore.update((store) => {
    store.challengee = {
      username: "",
      socket_id: "",
      avatar_id: 0
    };

    return store;
  });
};

export default exitLobbyReceiver;