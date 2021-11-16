import {createServer} from "http";
import {Api, JsonRpc} from "eosjs";
import {JsSignatureProvider} from "eosjs/dist/eosjs-jssig.js";
import {MongoClient} from "mongodb";
import fetch from "node-fetch";
import {Server} from "socket.io";
import settings from "./settings.js";
import requests from "./requests/index.js";
import {Eos, IO, Mongo} from "./services/index.js";
import {mnemonicToSeed, generateMnemonic} from "bip39";

import type {App} from "./models/App";

const {
  mongo: {uri},
  eos: {endpoint, contractKey},
  socket: {opts},
  server: {port}
} = settings;

console.log(`generateMnemonic()`);
console.log(generateMnemonic());
console.log(`generateMnemonic()`);

const httpServer = createServer();
const socketioServer = new Server(httpServer, opts);

const mongoClient = await MongoClient.connect(uri);
const mongoDb = mongoClient.db("som");

const rpc = new JsonRpc(endpoint, {fetch});
const signatureProvider = new JsSignatureProvider([contractKey]);
const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();
const api = new Api({rpc, signatureProvider, textDecoder, textEncoder});

const requestKeys = Object.keys(requests) as Array<keyof typeof requests>;

socketioServer.on("connection", (socket) => {
  const eos = new Eos(api, socket);
  const io = new IO(socketioServer, socket);
  const mongo = new Mongo(mongoDb, socket);
  const app: App = {eos, io, mongo};

  requestKeys.forEach((request) => {
    io.on(request, (params: any = {}) => {
      requests[request](app, params);
    });
  });
});

httpServer.listen(port);