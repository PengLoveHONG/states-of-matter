import type {Blockchain, Game, Io, Mongo} from "../services";

interface Services {
  blockchain: Blockchain;
  game: Game;
  io: Io;
  mongo: Mongo;
}

export type {Services};
