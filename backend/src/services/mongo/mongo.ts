import Service from "../service";

import type {
  DeleteResult,
  Document,
  FindOneAndUpdateOptions,
  InsertOneResult,
  ModifyResult,
  UpdateResult
} from "mongodb";

import type {
  QueryPlayerParams,
  InsertPlayerParams,
  UpdatePlayerParams,
  Player,
  Msg
} from "./mongo.models";

class Mongo extends Service {
  private _handleError (error: unknown): void {
    console.error(error);
    this._apis.socket.emit("notification", {msg: JSON.stringify(error)});
  }

  public async getSocketIds(users: string[]): Promise<any[] | undefined> {
    try {
      const socketIds = await this
        ._apis
        .mongo
        .collection<Player>("players")
        .find({username: {$in: users}})
        .project({_id: 0, socket_id: 1})
        .map((x) => x.socket_id)
        .toArray();

      return socketIds;
    } catch (error) {
      this._handleError(error);
    }
  }

  public async startGame (query: any): Promise<InsertOneResult<any>> {
    let document!: InsertOneResult<any>;

    try {
      document = await this._apis.mongo.collection<any>("games").insertOne(query);
    } catch (error) {
      this._handleError(error);
    }

    return document
  }
  public async findGame (query: any): Promise<any | undefined> {
    let document!: any | null;

    try {
      document = await this._apis.mongo.collection<any>("games").findOne(query);
    } catch (error) {
      this._handleError(error);
    }

    return document ? document : undefined;
  }

  public async findPlayer (query: QueryPlayerParams): Promise<Player | undefined> {
    let document!: Player | null;

    try {
      document = await this._apis.mongo.collection<Player>("players").findOne(query);
    } catch (error) {
      this._handleError(error);
    }

    return document ? document : undefined;
  }

  public async insertPlayer (params: InsertPlayerParams): Promise<InsertOneResult<Player>> {
    let inserted!: InsertOneResult<Player>;

    try {
      inserted = await this._apis.mongo.collection<Player>("players").insertOne(params);
    } catch (error) {
      this._handleError(error);
    }

    return inserted;
  }

  public async updatePlayer (query: QueryPlayerParams, params: UpdatePlayerParams): Promise<boolean> {
    let update!: UpdateResult;

    try {
      update = await this
        ._apis.mongo
        .collection<Player>("players")
        .updateOne(query, {$set: params});
    } catch (error) {
      this._handleError(error);
    }

    return update.modifiedCount > 0 ? true : false;
  }

  public async findAndUpdatePlayer (
    query: QueryPlayerParams,
    params: UpdatePlayerParams,
    options: FindOneAndUpdateOptions
  ): Promise<ModifyResult<Player>> {
    let result!: ModifyResult<Player>;

    try {
      result = await this
        ._apis.mongo
        .collection<Player>("players")
        .findOneAndUpdate(query, {$set: params}, options);
    } catch (error) {
      this._handleError(error);
    }

    return result;
  }

  public async findChat(playerA: string, playerB: string): Promise<Document | null> {
    let document!: Document | null;

    try {
      document = await this._apis.mongo.collection("chats").findOne({
        players: {$all: [playerA, playerB]}
      });
    } catch (error) {
      this._handleError(error);
    }

    return document;
  }

  public async insertChat(playerA: string, playerB: string): Promise<InsertOneResult<Document>> {
    let inserted!: InsertOneResult<Document>;

    try {
      inserted = await this._apis.mongo.collection("chats").insertOne({
        players: [playerA, playerB],
        messages: []
      });
    } catch (error) {
      this._handleError(error);
    }

    return inserted;
  }

  public async deleteChat(playerA: string, playerB: string): Promise<DeleteResult> {
    let deleteResult!: DeleteResult;

    try {
      deleteResult = await this._apis.mongo.collection("chats").deleteOne({
        players: {
          $all: [playerA, playerB]
        }
      });
    } catch (error) {
      this._handleError(error);
    }

    return deleteResult;
  }

  public async pushChatMsg(players: Array<string>, msg: Msg): Promise<boolean> {
    const {sender, text, date} = msg;
    let updated!: UpdateResult;

    try {
      updated = await this._apis.mongo.collection("chats").updateOne({
        players: {$all: players}
      }, {
        $push: {
          messages: {sender, text, date}
        }
      });
    } catch (error) {
      this._handleError(error);
    }

    return updated.modifiedCount > 0 ? true : false;
  }
}

export default Mongo;