const BlocklancerToken = artifacts.require("BlocklancerToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(BlocklancerToken)
};
