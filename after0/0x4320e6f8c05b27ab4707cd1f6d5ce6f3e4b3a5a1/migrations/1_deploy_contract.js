const ACCURAL_DEPOSIT = artifacts.require("ACCURAL_DEPOSIT");
module.exports = function(deployer, network, accounts) {
deployer.deploy(ACCURAL_DEPOSIT)
};
