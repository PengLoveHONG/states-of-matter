import type {Db} from "mongodb";

class Mongo {
  public readonly db: Db;

  constructor(db: Db) {
    this.db = db;
  }

  // deprecated, socket_id is now on-chain
  public async getSocketIds(users: string[]): Promise<any[] | undefined> {
    try {
      const socketIds = await this
        .db
        .collection("players")
        .find({username: {$in: users}})
        .project({_id: 0, username: 1})
        .map((x) => x.username)
        .toArray();

      return socketIds;
    } catch (error) {
      console.error(error);
    }
  }

  public async findPlayer(username: string): Promise<any> {
    return await this.db.collection("players").findOne({username});
  }

  public async deleteChat(playerA: string, playerB: string): Promise<void> {
    try {
      await this.db.collection("chats").deleteOne({
        players: {
          $all: [playerA, playerB]
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default Mongo;