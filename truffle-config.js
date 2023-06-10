module.exports = {
  networks: {
    develop:{
      host: "127.0.0.1",
      network_id: 5777,
      port: 9545,
      accounts: 1836,
      skipDryRun: true,
      gasLimit:0x1fffffffffffff
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