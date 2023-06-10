const WedIndex = artifacts.require("WedIndex");
module.exports = function(deployer, network, accounts) {
deployer.deploy(WedIndex)
};
