import type {Eos, IO, Mongo} from "../services";

interface App {
  eos: Eos;
  io: IO;
  mongo: Mongo;
}

export type {App};