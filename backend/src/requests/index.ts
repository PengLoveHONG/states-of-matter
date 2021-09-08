// Global
import sendChatMsg from "./sendChatMsg";
// Auth
import getPrivateKeyHash from "./auth/getPrivateKeyHash";
import signin from "./auth/signin";
import signup from "./auth/signup";
// Client
import closeLobby from "./client/closeLobby";
import createLobby from "./client/createLobby";
import exitLobby from "./client/exitLobby";
import joinLobby from "./client/joinLobby";
import saveDeck from "./client/saveDeck";
import selectDeck from "./client/selectDeck";
import setDeckKlass from "./client/setDeckKlass";
import setDeckName from "./client/setDeckName";
import startGame from "./client/startGame";
// Game
import exitGame from "./game/exitGame";
// Sidenav
import acceptFriend from "./sidenav/acceptFriend";
import addFriend from "./sidenav/addFriend";
import block from "./sidenav/block";
import setAvatar from "./sidenav/setAvatar";
import declineFriend from "./sidenav/declineFriend";
import signout from "./sidenav/signout";
import unblock from "./sidenav/unblock";
import unfriend from "./sidenav/unfriend";
import updateFriend from "./sidenav/updateFriend";

const events = {
  // Global
  sendChatMsg,
  // Auth
  getPrivateKeyHash,
  signin,
  signup,
  // Client
  setDeckName,
  closeLobby,
  createLobby,
  exitLobby,
  joinLobby,
  saveDeck,
  selectDeck,
  setDeckKlass,
  startGame,
  // Game
  exitGame,
  // Sidenav
  acceptFriend,
  addFriend,
  block,
  setAvatar,
  declineFriend,
  signout,
  unblock,
  unfriend,
  updateFriend
};

export default events;