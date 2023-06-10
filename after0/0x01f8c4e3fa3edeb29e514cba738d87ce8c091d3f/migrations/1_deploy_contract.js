const PERSONAL_BANK = artifacts.require("PERSONAL_BANK");
module.exports = function(deployer, network, accounts) {
deployer.deploy(PERSONAL_BANK)
};
