import type {Document} from "mongodb";

interface Signatures { signout: string; }

interface QueryPlayerParams {
  socket_id?: string;
  username?: string;
  public_key?: string;
}

interface InsertPlayerParams {
  socket_id: string;
  username: string;
  public_key: string;
  private_key_hash: string;
  signatures: Signatures;
}

interface UpdatePlayerParams {
  socket_id?: string;
  username?: string;
  public_key?: string;
  private_key_hash?: string;
  signatures?: Signatures;
}

interface Player extends Document {
  socket_id: string;
  username: string;
  public_key: string;
  private_key_hash: string;
  signatures: Signatures;
}

interface Msg {
  sender: string;
  text: string;
  date: Date;
}

export type {QueryPlayerParams, InsertPlayerParams, UpdatePlayerParams, Player, Msg};