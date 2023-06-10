const SPXToken = artifacts.require("SPXToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(SPXToken, accounts[361], accounts[243])
};
