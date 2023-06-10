const DEP_BANK = artifacts.require("DEP_BANK");
module.exports = function(deployer, network, accounts) {
deployer.deploy(DEP_BANK)
};
