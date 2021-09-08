import {get, Writable, writable} from "svelte/store";
import social from "stores/social";

interface ChatMessage { text: string; date: string; }
interface Chat { username: string; messages: Array<ChatMessage>; }

const chat: Writable<Array<Chat>> = writable([]);

const generateChat = (): void => {
  const socialStore = get(social);
  const newChat: Array<Chat> = [];

  socialStore.chat.messages.forEach((message) => {
    const date = new Date(message.date);
    const timeString = date.toLocaleTimeString(["en-US"], {
      hour: "2-digit",
      minute: "2-digit"
    });
    const newChatLast = newChat[newChat.length - 1];

    if (newChat.length && newChatLast.username === message.username) {
      newChatLast.messages.push({text: message.text, date: timeString});
    } else {
      newChat.push({
        username: message.username,
        messages: [{text: message.text, date: timeString}]
      });
    }
  });

  chat.set(newChat);
};

export default chat;
export {generateChat};