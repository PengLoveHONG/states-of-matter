import {createServer} from "http";
import {Api, JsonRpc} from "eosjs";
import {JsSignatureProvider} from "eosjs/dist/eosjs-jssig.js";
import {MongoClient} from "mongodb";
import fetch from "node-fetch";
import {Server} from "socket.io";
import settings from "./settings.js";
import requests from "./requests/index.js";
import {Eos, Mongo} from "./services/index.js";

import type {App} from "./models/App";

const {
  mongo: {uri},
  eos: {endpoint, contractKey},
  socket: {opts},
  server: {port}
} = settings;

const server = createServer();
const io = new Server(server, opts);

const mongoClient = await MongoClient.connect(uri);
const mongoDb = mongoClient.db("som");

const rpc = new JsonRpc(endpoint, {fetch});
const signatureProvider = new JsSignatureProvider([contractKey]);
const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();
const api = new Api({rpc, signatureProvider, textDecoder, textEncoder});

const requestKeys = Object.keys(requests) as Array<keyof typeof requests>;

io.on("connection", (socket) => {
  const eos = new Eos(api, socket);
  const mongo = new Mongo(mongoDb, socket);
  const app: App = {eos, mongo, io, socket};

  requestKeys.forEach((request) => {
    socket.on(request, (params: any = {}) => {
      requests[request](app, params);
    });
  });
});

server.listen(port);