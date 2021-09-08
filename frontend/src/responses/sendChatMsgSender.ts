import type {Message} from "models/view/Social";
import social from "stores/social";

interface Sender { username: string; }
interface Receiver { username: string; }
interface SendChatMsgSender {
  sender: Sender;
  receiver: Receiver;
  text: string;
  date: Date;
}

const sendChatMsgSender = (params: SendChatMsgSender): void => {
  const {sender: {username}, receiver, text, date} = params;
  const message: Message = {username, text, date};

  social.update((store) => {
    store
      .friends
      .find((friend) => friend.username === receiver.username)
      .messages
      .push(message);

    return store;
  });
};

export default sendChatMsgSender;