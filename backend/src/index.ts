import {createServer} from "http";
import {Api, JsonRpc} from "eosjs";
import {JsSignatureProvider} from "eosjs/dist/eosjs-jssig.js";
import {MongoClient} from "mongodb";
import fetch from "node-fetch";
import {Server} from "socket.io";
import settings from "./settings.js";
import requests from "./requests/index.js";
import {Blockchain, Game, Io, Mongo} from "./services/index.js";

import type {Apis} from "./models/Apis.js";
import type {Services} from "./models/Services";

const {
  mongo: {uri},
  eos: {endpoint, contractKey},
  socket: {opts},
  server: {port}
} = settings;

const httpServer = createServer();
const socketioServer = new Server(httpServer, opts);

const mongoClient = await MongoClient.connect(uri);
const mongoDb = mongoClient.db("som");

const rpc = new JsonRpc(endpoint, {fetch});
const signatureProvider = new JsSignatureProvider([contractKey]);
const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();
const eosApi = new Api({rpc, signatureProvider, textDecoder, textEncoder});

const requestKeys = Object.keys(requests) as Array<keyof typeof requests>;

socketioServer.on("connection", (socket) => {
  const apis: Apis = {
    eos: eosApi,
    mongo: mongoDb,
    socket,
    io: socketioServer
  };

  const services: Services = {
    blockchain: new Blockchain(apis),
    game: new Game(apis),
    io: new Io(apis),
    mongo: new Mongo(apis)
  };

  requestKeys.forEach((request) => {
    socketioServer.on(request, (params: any = {}) => {
      requests[request](services, params);
    });
  });
});

httpServer.listen(port);
