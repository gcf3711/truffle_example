const BANK_SAFE = artifacts.require("BANK_SAFE");
module.exports = function(deployer, network, accounts) {
deployer.deploy(BANK_SAFE)
};
