import {createServer} from "http";
import {join} from "path";
import {Api, JsonRpc} from "eosjs";
import {JsSignatureProvider} from "eosjs/dist/eosjs-jssig";
import express from "express";
import {MongoClient} from "mongodb";
import fetch from "node-fetch";
import {Server} from "socket.io";
import settings from "./settings";
import requests from "./requests";
import {Eos, Mongo} from "./services";

import type {App} from "./models/App";

const init = async (): Promise<void> => {
  const {uri} = settings.mongo;
  const {endpoint, contractKey} = settings.eos;
  const {opts} = settings.socket;

  const app = express();
  const server = createServer(app);
  const io = new Server(server, opts);

  const client = await MongoClient.connect(uri);
  const mongoDb = client.db("som");

  const rpc = new JsonRpc(endpoint, {fetch});
  const signatureProvider = new JsSignatureProvider([contractKey]);
  const textDecoder = new TextDecoder();
  const textEncoder = new TextEncoder();
  const api = new Api({rpc, signatureProvider, textDecoder, textEncoder});

  const mongo = new Mongo(mongoDb);

  const requestKeys = Object.keys(requests) as Array<keyof typeof requests>;

  app.use("/", express.static(join(process.cwd(), "../frontend/dist")));
  app.get("/", (req, res) => {
    res.sendFile(join(process.cwd(), "../frontend/dist/index.html"));
  });
  app.get("*", (req, res) => {
    res.sendFile(join(process.cwd(), "../frontend/dist/index.html"));
  });

  server.listen(process.env.PORT || 4200);

  io.on("connection", (socket) => {
    const eos = new Eos(api, socket);
    const app: App = {eos, mongo, io, socket};

    requestKeys.forEach((request) => {
      socket.on(`${request}Req`, (params: object = {}) => {
        requests[request](app, params);
      });
    });
  });
};

init();