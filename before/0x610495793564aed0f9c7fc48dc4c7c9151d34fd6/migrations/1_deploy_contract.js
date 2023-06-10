const SimpleWallet = artifacts.require("SimpleWallet");
module.exports = function(deployer, network, accounts) {
deployer.deploy(SimpleWallet)
};
