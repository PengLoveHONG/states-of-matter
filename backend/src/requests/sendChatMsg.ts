import type {App} from "../models/App";

interface Sender {
  username: string;
}

interface Receiver {
  username: string;
  socketId: string;
}

interface Params {
  sender: Sender;
  receiver: Receiver;
  text: string;
  date: Date;
}

const sendChatMsg = async (app: App, params: Params): Promise<void> => {
  try {
    const {io, mongo, socket} = app;
    const {sender, receiver, text, date} = params;

    await mongo.db.collection("chats").updateOne({
      players: {$all: [sender.username, receiver.username]}
    }, {
      $push: {messages: {username: sender.username, text, date}}
    });

    socket.emit("sendChatMsgSenderRes", {
      sender,
      receiver: {username: receiver.username},
      text,
      date
    });

    io
      .to(receiver.socketId)
      .emit("sendChatMsgReceiverRes", {sender, text, date});
  } catch (error) {
    console.error(error);
  }
};

export default sendChatMsg;