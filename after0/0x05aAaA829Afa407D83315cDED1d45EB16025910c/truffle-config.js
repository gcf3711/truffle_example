module.exports = {
  networks: {
    develop:{
      host: "127.0.0.1",
      network_id: 5777,
      port: 9545,
      accounts: 363,
      skipDryRun: true
    }
  },
  mocha: {
  },
  compilers: {
    solc: {
      version: "0.4.25",
    }
  },
};
