const MONEY_BOX = artifacts.require("MONEY_BOX");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MONEY_BOX)
};
