interface LobbyPlayer {
  username: string;
  socket_id: string;
  avatar_id: number;
}
interface Lobby {
  lobby_id: number;
  host: LobbyPlayer;
  challengee: LobbyPlayer;
}

export type {LobbyPlayer, Lobby};