const PandaCore = artifacts.require("PandaCore");
module.exports = function(deployer, network, accounts) {
deployer.deploy(PandaCore)
};
