const SunContractToken = artifacts.require("SunContractToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(SunContractToken, accounts[121])
};
