// Global
import notification from "./notification";
import sendChatMsgReceiver from "./sendChatMsgReceiver";
import sendChatMsgSender from "./sendChatMsgSender";
// Auth
import getPrivateKeyHash from "./auth/getPrivateKeyHash";
import signin from "./auth/signin";
// Client
import closeLobbyReceiver from "./client/closeLobbyReceiver";
import closeLobbySender from "./client/closeLobbySender";
import createLobby from "./client/createLobby";
import exitLobbyReceiver from "./client/exitLobbyReceiver";
import exitLobbySender from "./client/exitLobbySender";
import joinLobbyReceiver from "./client/joinLobbyReceiver";
import joinLobbySender from "./client/joinLobbySender";
import saveDeck from "./client/saveDeck";
import selectDeck from "./client/selectDeck";
import setDeckKlass from "./client/setDeckKlass";
import setDeckName from "./client/setDeckName";
import startGameReceiver from "./client/startGameReceiver";
import startGameSender from "./client/startGameSender";
// Game
import exitGameReceiver from "./game/exitGameReceiver";
import exitGameSender from "./game/exitGameSender";
// Sidenav
import acceptFriendReceiver from "./sidenav/acceptFriendReceiver";
import acceptFriendSender from "./sidenav/acceptFriendSender";
import addFriend from "./sidenav/addFriend";
import blockReceiver from "./sidenav/blockReceiver";
import blockSender from "./sidenav/blockSender";
import setAvatarReceiver from "./sidenav/setAvatarReceiver";
import setAvatarSender from "./sidenav/setAvatarSender";
import declineFriend from "./sidenav/declineFriend";
import unblock from "./sidenav/unblock";
import unfriendReceiver from "./sidenav/unfriendReceiver";
import unfriendSender from "./sidenav/unfriendSender";
import updateFriend from "./sidenav/updateFriend";

const responses = {
  // Global
  notification,
  sendChatMsgReceiver,
  sendChatMsgSender,
  // Auth
  getPrivateKeyHash,
  signin,
  // Client
  setDeckName,
  closeLobbyReceiver,
  closeLobbySender,
  createLobby,
  exitLobbyReceiver,
  exitLobbySender,
  joinLobbyReceiver,
  joinLobbySender,
  saveDeck,
  selectDeck,
  setDeckKlass,
  startGameReceiver,
  startGameSender,
  // Game
  exitGameReceiver,
  exitGameSender,
  // Sidenav
  acceptFriendReceiver,
  acceptFriendSender,
  addFriend,
  blockReceiver,
  blockSender,
  setAvatarReceiver,
  setAvatarSender,
  declineFriend,
  unblock,
  unfriendReceiver,
  unfriendSender,
  updateFriend
};

export default responses;