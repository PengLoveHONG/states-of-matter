import {io} from "socket.io-client";

import type {Socket} from "socket.io-client";

class SocketService {
  private readonly _socket: Socket;

  constructor () {
    this._socket = io("ws://localhost:4200");
  }

  emit (event: string, data: object = {}): void {
    this._socket.emit(event, data);
  }

  listenToResponses (responses): void {
    Object.keys(responses).forEach((response) => {
      this._socket.on(response, (params = {}) => {
        responses[response](params);
      });
    });
  };
}

const socketService = new SocketService();

export default socketService;