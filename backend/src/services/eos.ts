import {RpcError} from "eosjs";
import settings from "../settings";

import type {Api} from "eosjs";
import type {Socket} from "socket.io";

class Eos {
  public readonly api: Api;
  public readonly socket: Socket;
  public readonly contract: string;

  constructor(api: Api, socket: Socket) {
    this.api = api;
    this.socket = socket;
    this.contract = settings.eos.contractAccount;
  }

  async findPlayer(username: string) {
    try {
      const player = await this.api.rpc.get_table_rows({
        code: this.contract,
        scope: this.contract,
        table: "players",
        lower_bound: username,
        upper_bound: username
      });

      return player.rows[0];
    } catch (error) {
      console.log("");
      console.log("========== findPlayer() ==========");
      if (error instanceof RpcError) {
        console.log(error.json.error.details[0].message);

        this.socket.emit("notificationRes", {
          msg: error.json.error.details[0].message
        });
      }
      console.log("========== findPlayer() ==========");
      console.log("");
    }
  }

  async findLobby(lobby_id: number) {
    try {
      const lobby = await this.api.rpc.get_table_rows({
        code: this.contract,
        scope: this.contract,
        table: "lobbies",
        lower_bound: lobby_id,
        upper_bound: lobby_id
      });

      return lobby.rows[0];
    } catch (error) {
      console.error(error);
    }
  }

  async pushAction(action: string, data: any) {
    try {
      const transaction = await this.api.transact({
        actions: [{
          account: this.contract,
          name: action,
          authorization: [{
            actor: this.contract,
            permission: "active"
          }],
          data
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 30
      });

      return transaction;
    } catch (error: any) {
      console.log("");
      console.log("========== pushAction() ==========");
      console.log(error.toString());
      console.log("========== pushAction() ==========");
      console.log("");

      this.socket.emit("notificationRes", {msg: error.toString()});
    }
  }
}

export default Eos;