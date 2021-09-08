import {io} from "socket.io-client";

import type {Socket} from "socket.io-client";

class SocketService {
  public readonly socket: Socket;

  constructor () {
    this.socket = io(/*"ws://localhost:4200"*/);
  }

  emit (event: string, data: object = {}): void {
    this.socket.emit(event, data);
  }

  listenToResponses (responses) {
    Object.keys(responses).forEach((response) => {
      this.socket.on(`${response}Res`, (params = {}) => {
        responses[response](params);
      });
    });
  };
}

const socketService = new SocketService();

const socket = io(/*"ws://localhost:4200"*/);

const listenToResponses = (responses) => {
  Object.keys(responses).forEach((response) => {
    socket.on(`${response}Res`, (params = {}) => {
      responses[response](params);
    });
  });
};

const unlistenResponses = (responses) => {
  Object.keys(responses).forEach((response) => {
    socket.off(`${response}Res`);
  });
};

export default socketService;
export {socket, listenToResponses, unlistenResponses};