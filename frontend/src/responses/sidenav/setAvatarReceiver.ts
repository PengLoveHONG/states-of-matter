import social from "stores/social";

interface Params {
  username: string;
  avatarId: number;
}

const setAvatarReceiver = (params: Params): void => {
  const {username, avatarId} = params;

  social.update((store) => {
    const friend = store.friends.find((friend) => friend.username === username);
    friend.avatarId = avatarId;
    return store;
  });
};

export default setAvatarReceiver;