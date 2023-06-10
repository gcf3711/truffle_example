const TownCrier = artifacts.require("TownCrier");
module.exports = function(deployer, network, accounts) {
deployer.deploy(TownCrier)
};
