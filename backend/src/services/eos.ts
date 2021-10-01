import {RpcError} from "eosjs";
import settings from "../settings.js";

import type {Api} from "eosjs";
import type {GetTableRowsResult, PushTransactionArgs, ReadOnlyTransactResult} from "eosjs/dist/eosjs-rpc-interfaces";
import type {Socket} from "socket.io";
import type {Game} from "../models/Game";
import type {Lobby} from "../models/Lobby";
import type {Player} from "../models/Player";
import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";

class Eos {
  constructor(
    private readonly _api: Api,
    private readonly _socket: Socket
  ) {}

  private _handleError(name: string, error: unknown): void {
    console.log("");
    console.log(`========== ${name} ==========`);

    if (error instanceof RpcError) {
      const msg = error.json.error.details[0].message;

      console.error(msg);
      this._socket.emit("notification", {msg});
    } else if (error instanceof Error) {
      const msg = error.message;

      console.error(msg);
      this._socket.emit("notification", {msg});
    }

    console.log(`========== ${name} ==========`);
    console.log("");
  }

  public async findPlayer(username: string): Promise<Player | undefined> {
    const {contractAccount} = settings.eos;
    let table!: GetTableRowsResult;

    try {
      table = await this._api.rpc.get_table_rows({
        code: contractAccount,
        scope: contractAccount,
        table: "players",
        lower_bound: username,
        upper_bound: username,
        limit: 1
      });
    } catch (error) {
      this._handleError("findPlayer", error);
    }

    return table.rows[0];
  }

  public async findLobby(lobby_id: number): Promise<Lobby | undefined> {
    const {contractAccount} = settings.eos;
    let table!: GetTableRowsResult;

    try {
      table = await this._api.rpc.get_table_rows({
        code: contractAccount,
        scope: contractAccount,
        table: "lobbies",
        lower_bound: lobby_id,
        upper_bound: lobby_id
      });
    } catch (error) {
      this._handleError("findLobby", error);
    }

    return table.rows[0];
  }

  public async findGame(game_id: number): Promise<Game | undefined> {
    const {contractAccount} = settings.eos;
    let table!: GetTableRowsResult;

    try {
      table = await this._api.rpc.get_table_rows({
        code: contractAccount,
        scope: contractAccount,
        table: "games",
        lower_bound: game_id,
        upper_bound: game_id
      });
    } catch (error) {
      this._handleError("findGame", error);
    }

    return table.rows[0];
  }

  public async pushAction(
    action: string,
    data: object
  ): Promise<TransactResult | ReadOnlyTransactResult | PushTransactionArgs | undefined> {
    const {contractAccount} = settings.eos;
    let transaction!: TransactResult | ReadOnlyTransactResult | PushTransactionArgs;

    try {
      transaction = await this._api.transact({
        actions: [{
          account: contractAccount,
          name: action,
          authorization: [{
            actor: contractAccount,
            permission: "active"
          }],
          data
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 30
      });
    } catch (error) {
      this._handleError("pushAction", error);
    }

    return transaction;
  }
}

export default Eos;