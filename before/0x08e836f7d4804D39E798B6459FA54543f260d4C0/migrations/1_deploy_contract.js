const EnterCoin = artifacts.require("EnterCoin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(EnterCoin)
};
