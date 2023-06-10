const RemiCoin = artifacts.require("RemiCoin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(RemiCoin, web3.utils.toBN("8400000000000000"), "RemiCoin", "RMC", web3.utils.toBN("8"))
};
