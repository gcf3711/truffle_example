const GrowToken = artifacts.require("GrowToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(GrowToken)
};
