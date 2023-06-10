const RocketCoin = artifacts.require("RocketCoin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(RocketCoin)
};
