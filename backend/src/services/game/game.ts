import Service from "../service.js";

class Game extends Service {
  private _handleError (error: unknown): void {
    console.error(error);
  }

  async shuffleDeck (): Promise<any> {}
  async drawCard (): Promise<any> {}
  async attack (): Promise<any> {}

  async playCard (): Promise<any> {
    let document;

    try {
      document = await this._apis.mongo.collection("players").findOne({});
    } catch (error) {
      this._handleError(error);
    }

    return document;
  }
}

export default Game;
