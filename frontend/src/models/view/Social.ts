interface Message {
  username: string;
  text: string;
  date: Date;
}

interface Friend {
  username: string;
  avatar_id: number;
  status: number;
  messages: Array<Message>;
}

interface Chat {
  username: string;
  avatar_id: number;
  status: number;
  is_open: boolean;
  messages: Array<Message>;
}

interface Social {
  friends: Array<Friend>;
  chat: Chat;
}

export type {Message, Friend, Chat, Social};