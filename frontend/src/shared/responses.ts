// Global
import notification from "./responses/notification";
import sendChatMsgReceiver from "./responses/sendChatMsgReceiver";
import sendChatMsgSender from "./responses/sendChatMsgSender";
// Auth
import getPrivateKeyHash from "./responses/auth/getPrivateKeyHash";
import signin from "./responses/auth/signin";
// Client
import closeLobbyReceiver from "./responses/client/closeLobbyReceiver";
import closeLobbySender from "./responses/client/closeLobbySender";
import createLobby from "./responses/client/createLobby";
import exitLobbyReceiver from "./responses/client/exitLobbyReceiver";
import exitLobbySender from "./responses/client/exitLobbySender";
import joinLobbyReceiver from "./responses/client/joinLobbyReceiver";
import joinLobbySender from "./responses/client/joinLobbySender";
import saveDeck from "./responses/client/saveDeck";
import selectDeck from "./responses/client/selectDeck";
import setDeckKlass from "./responses/client/setDeckKlass";
import setDeckName from "./responses/client/setDeckName";
import startGameReceiver from "./responses/client/startGameReceiver";
import startGameSender from "./responses/client/startGameSender";
// Game
import exitGameReceiver from "./responses/game/exitGameReceiver";
import exitGameSender from "./responses/game/exitGameSender";
// Sidenav
import acceptFriendReceiver from "./responses/sidenav/acceptFriendReceiver";
import acceptFriendSender from "./responses/sidenav/acceptFriendSender";
import addFriend from "./responses/sidenav/addFriend";
import blockReceiver from "./responses/sidenav/blockReceiver";
import blockSender from "./responses/sidenav/blockSender";
import setAvatarReceiver from "./responses/sidenav/setAvatarReceiver";
import setAvatarSender from "./responses/sidenav/setAvatarSender";
import declineFriend from "./responses/sidenav/declineFriend";
import unblock from "./responses/sidenav/unblock";
import unfriendReceiver from "./responses/sidenav/unfriendReceiver";
import unfriendSender from "./responses/sidenav/unfriendSender";
import updateFriend from "./responses/sidenav/updateFriend";

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