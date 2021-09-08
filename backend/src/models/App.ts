import type {Server, Socket} from "socket.io";
import type {Eos, Mongo} from "../services";

interface App {
  eos: Eos;
  mongo: Mongo;
  io: Server;
  socket: Socket;
}

export type {App};