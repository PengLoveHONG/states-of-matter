import type {Services} from "../models/Services";

interface Params {
  sender: string;
  receiver: string;
  text: string;
  date: Date;
}

const sendChatMsg = async (services: Services, params: Params): Promise<void> => {
  const {io, mongo} = services;
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