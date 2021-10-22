import type {Server, Socket} from "socket.io";

class IO {
  constructor (
    private readonly _io: Server,
    private readonly _socket: Socket
  ) {}

  public get socket_id (): string { return this._socket.id; }

  public emit (event: string, params?: object): void {
    this._socket.emit(event, params);
  }

  public emitTo (socket_id: string | string[], event: string, params?: object): void {
    this._io.to(socket_id).emit(event, params);
  }

  public on (event: string, cb: () => void): void {
    this._socket.on(event, cb);
  }

  public notification (msg: string): void {
    this._socket.emit("notification", {msg});
  }
}

export default IO;