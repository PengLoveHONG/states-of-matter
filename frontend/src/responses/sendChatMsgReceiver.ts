import {socialStore} from "stores/view";

import type {Message} from "models/view/Social";

interface Sender { username: string; }
interface SendChatMsgReceiver { sender: Sender; text: string; date: Date; }

const sendChatMsgReceiver = (params: SendChatMsgReceiver): void => {
  const {sender: {username}, text, date} = params;
  const message: Message = {username, text, date};

  socialStore.update((store) => {
    store
      .friends
      .find((friend) => friend.username === username)
      .messages
      .push(message);

    return store;
  });
};

export default sendChatMsgReceiver;