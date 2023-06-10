const W_WALLET = artifacts.require("W_WALLET");
module.exports = function(deployer, network, accounts) {
deployer.deploy(W_WALLET, accounts[1])
};
