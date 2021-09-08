import type {ObjectId} from "mongodb";

interface Message {
  sender: string;
  text: string;
  date: Date;
}

interface Chat {
  _id?: ObjectId;
  players: [string, string];
  messages: Message[];
}

export {Message, Chat};