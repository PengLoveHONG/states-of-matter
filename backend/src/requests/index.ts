// Global
import sendChatMsg from "./sendChatMsg.js";
// Auth
import disconnect from "./auth/disconnect.js";
import getPrivateKeyHash from "./auth/getPrivateKeyHash.js";
import signin from "./auth/signin.js";
import signup from "./auth/signup.js";
// Client
import destroyLobby from "./client/destroyLobby.js";
import leaveLobby from "./client/leaveLobby.js";
import joinLobby from "./client/joinLobby.js";
import makeLobby from "./client/makeLobby.js";
import saveDeck from "./client/saveDeck.js";
import selectDeck from "./client/selectDeck.js";
import setDeckKlass from "./client/setDeckKlass.js";
import setDeckName from "./client/setDeckName.js";
import startGame from "./client/startGame.js";
// Game
import exitGame from "./game/exitGame.js";
import playCard from "./game/playCard.js";
// Sidenav
import acceptFriend from "./sidenav/acceptFriend.js";
import addFriend from "./sidenav/addFriend.js";
import block from "./sidenav/block.js";
import setAvatar from "./sidenav/setAvatar.js";
import declineFriend from "./sidenav/declineFriend.js";
import signout from "./sidenav/signout.js";
import unblock from "./sidenav/unblock.js";
import unfriend from "./sidenav/unfriend.js";
import updateFriend from "./sidenav/updateFriend.js";

const events = {
  // Global
  sendChatMsg,
  // Auth
  disconnect,
  getPrivateKeyHash,
  signin,
  signup,
  // Client
  destroyLobby,
  makeLobby,
  leaveLobby,
  joinLobby,
  saveDeck,
  selectDeck,
  setDeckKlass,
  setDeckName,
  startGame,
  // Game
  exitGame,
  playCard,
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