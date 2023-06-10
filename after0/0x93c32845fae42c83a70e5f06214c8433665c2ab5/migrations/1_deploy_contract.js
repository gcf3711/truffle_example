const X_WALLET = artifacts.require("X_WALLET");
module.exports = function(deployer, network, accounts) {
deployer.deploy(X_WALLET, accounts[1])
};
