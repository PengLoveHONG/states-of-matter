import type {Db, DeleteResult, Document, InsertOneResult, UpdateResult} from "mongodb";
import type {Socket} from "socket.io";

interface InsertParams {
  username: string;
  public_key: string;
  private_key_hash: string;
  socket_id: string;
  signatures: object;
}
interface UpdateParams {
  username?: string;
  public_key?: string;
  private_key_hash?: string;
  socket_id?: string;
  signatures?: object;
}
interface Player extends Document {
  username: string;
  public_key: string;
  private_key_hash: string;
  socket_id: string;
  signatures: object;
}

class Mongo {
  constructor(
    private readonly _db: Db,
    private readonly _socket: Socket
  ) {}

  private _handleError(error: unknown): void {
    console.error(error);
    this._socket.emit("notification", {msg: JSON.stringify(error)})
  }

  public async spagete(socket_id: string, params: any, opts: any): Promise<any> {
    return await this._db.collection("players").findOneAndUpdate(
      {socket_id},
      {
        $set: {
          socket_id: "",
          signatures: {}
        }
      },
      {returnDocument: "before"}
    );
  }

  public async getSocketIds(users: string[]): Promise<any[] | undefined> {
    try {
      const socketIds = await this
        ._db
        .collection("players")
        .find({username: {$in: users}})
        .project({_id: 0, socket_id: 1})
        .map((x) => x.socket_id)
        .toArray();

      return socketIds;
    } catch (error) {
      this._handleError(error);
    }
  }

  public async insertPlayer(params: InsertParams): Promise<InsertOneResult<Document>> {
    let inserted!: InsertOneResult<Document>;

    try {
      inserted = await this._db.collection("players").insertOne(params);
    } catch (error) {
      this._handleError(error);
    }

    return inserted;
  }

  public async findPlayer(username: string): Promise<Player | undefined> {
    let document!: Player | null;

    try {
      document = await this._db.collection("players").findOne({username}) as Player;
    } catch (error) {
      this._handleError(error);
    }

    return document ? document : undefined;
  }

  public async updatePlayer(username: string, params: UpdateParams): Promise<boolean> {
    let updated!: UpdateResult;

    try {
      updated = await this._db.collection("players").updateOne({username}, {
        $set: {...params}
      });
    } catch (error) {
      this._handleError(error);
    }

    return updated.modifiedCount > 0 ? true : false;
  }

  public async findChat(playerA: string, playerB: string): Promise<Document | null> {
    let document!: Document | null;

    try {
      document = await this._db.collection("chats").findOne({
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
      inserted = await this._db.collection("chats").insertOne({
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
      deleteResult = await this._db.collection("chats").deleteOne({
        players: {
          $all: [playerA, playerB]
        }
      });
    } catch (error) {
      this._handleError(error);
    }

    return deleteResult;
  }
}

export default Mongo;