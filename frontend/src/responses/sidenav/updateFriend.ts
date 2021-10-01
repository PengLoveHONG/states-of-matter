import {socialStore} from "stores/view";

interface UpdateFriend {
  username: string;
  status: number;
}

const updateFriend = (params: UpdateFriend): void => {
  const {username, status} = params;

  console.log(params);

  socialStore.update((store) => {
    const {friends} = store;
    const friend = friends.find((friend) => friend.username === username);

    // if (status !== undefined) { friend.status = status; }
    friend.status = status;

    return store;
  });
};

export default updateFriend;