import type {App} from "../models/App";

interface Params {
  sender: string;
  receiver: string;
  text: string;
  date: Date;
}

const sendChatMsg = async (app: App, params: Params): Promise<void> => {
  const {io, mongo} = app;
  const {sender, receiver, text, date} = params;
  const msg = await mongo.pushChatMsg([sender, receiver], {sender, text, date});

  if (!msg) { return; }

  io.emit("sendChatMsgSender", {sender, receiver, text, date});
  const player = await mongo.findPlayer({username: receiver});

  if (!player || !player.socket_id) { return; }

  const {socket_id} = player;
  io.emitTo(socket_id, "sendChatMsgReceiver", {sender, text, date});
};

export default sendChatMsg;