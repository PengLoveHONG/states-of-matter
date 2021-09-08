interface Message {
  username: string;
  text: string;
  date: Date;
}

interface Friend {
  username: string;
  socketId: string;
  avatarId: number;
  status: number;
  messages: Array<Message>;
}

interface Chat {
  username: string;
  socketId: string;
  avatarId: number;
  status: number;
  isOpen: boolean;
  messages: Array<Message>;
}

interface Social {
  friends: Array<Friend>;
  chat: Chat;
}

export type {Message, Friend, Chat, Social};