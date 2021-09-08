const production = false;

const settings = {
  mongo: {
    uri: "mongodb://localhost:27017",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  eos: {
    endpoint: "https://testnet.telos.net",
    contractAccount: "telosgamesbp",
    contractKey: process.env.CONTRACT_KEY || "5K2rKojEWKC1UmmiyWKvvXcVeS1Devq2LQEgDyKejyFNJAX2AX2"
  },
  socket: {
    opts: production ? {} : {
      cors: {origin: "*"}
    }
  },
  port: process.env.PORT || 4200
};

export default settings;