import type {Services} from "../../models/Services"

interface Signatures {
  signout: string;
  leaveLobby: string;
}

interface Params {
  username: string;
  public_key: string;
  signature: string;
  signatures: Signatures;
}

const signin = async (services: Services, params: Params): Promise<void> => {
  const {blockchain, io, mongo} = services;
  const {username, public_key, signature, signatures} = params;
  let lobby;
  let game;

  const trx = await blockchain.transact("signin", {public_key, signature});

  if (!trx) { return; }

  const {socket_id} = io;
  const updated = await mongo.updatePlayer({username}, {socket_id, signatures});

  if (!updated) { return; }

  const player = await blockchain.findPlayer(username);

  if (!player) { return; }

  const {friends} = player.social;
  const friendsView: Array<any> = [];

  for (const friendname of friends) {
    const [friend, chat] = await Promise.all([
      blockchain.findPlayer(friendname),
      mongo.findChat(username, friendname)
    ]);

    if (!friend || !chat) { return; }

    const {status, avatar_id} = friend.account;
    const {messages} = chat;

    friendsView.push({username: friendname, status, avatar_id, messages});
  }

  if (player.account.lobby_id) {
    lobby = await blockchain.findLobby(player.account.lobby_id);

    if (!lobby) { return; }
  } else if (player.account.game_id) {
    game = await mongo.findGame({id: player.account.game_id});

    if (!game) { return; }
  }

  io.emit("signin", {player, friends: friendsView, lobby, game});
};

export default signin;