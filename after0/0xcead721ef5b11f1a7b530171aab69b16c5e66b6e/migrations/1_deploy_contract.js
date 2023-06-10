const WALLET = artifacts.require("WALLET");
module.exports = function(deployer, network, accounts) {
deployer.deploy(WALLET, accounts[2])
};
