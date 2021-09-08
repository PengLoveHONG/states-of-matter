import {io} from "socket.io-client";

const socket = io(/*"ws://localhost:4200"*/);

const listenToResponses = (responses) => {
  Object.keys(responses).forEach((response) => {
    socket.on(`${response}Res`, (params = {}) => {
      responses[response](params);
    });
  });
};

const unlistenResponses = (responses) => {
  Object.keys(responses).forEach((response) => {
    socket.off(`${response}Res`);
  });
};

export {socket, listenToResponses, unlistenResponses};