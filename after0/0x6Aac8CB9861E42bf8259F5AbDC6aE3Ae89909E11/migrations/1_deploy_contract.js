const BitcoinRed = artifacts.require("BitcoinRed");
module.exports = function(deployer, network, accounts) {
deployer.deploy(BitcoinRed)
};
