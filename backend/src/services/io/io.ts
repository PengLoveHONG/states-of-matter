import Service from "../service";

class Io extends Service {
  public get socket_id (): string {
    return this._apis.socket.id;
  }

  public emit (event: string, params?: object): void {
    this._apis.socket.emit(event, params);
  }

  public emitTo (socket_id: string | string[], event: string, params?: object): void {
    this._apis.io.to(socket_id).emit(event, params);
  }

  public on (event: string, cb: () => void): void {
    this._apis.socket.on(event, cb);
  }

  public notification (msg: string): void {
    this._apis.socket.emit("notification", {msg});
  }
}

export default Io;
