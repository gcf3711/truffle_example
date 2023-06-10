const PoCGame = artifacts.require("PoCGame");
module.exports = function(deployer, network, accounts) {
deployer.deploy(PoCGame, accounts[12], web3.utils.toBN("10000000000000000"))
};
