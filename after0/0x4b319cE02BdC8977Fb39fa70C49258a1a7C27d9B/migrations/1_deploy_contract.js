const UNLB = artifacts.require("UNLB");
module.exports = function(deployer, network, accounts) {
deployer.deploy(UNLB)
};
