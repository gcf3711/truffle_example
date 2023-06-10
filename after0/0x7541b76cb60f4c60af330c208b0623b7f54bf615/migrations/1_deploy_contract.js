const U_BANK = artifacts.require("U_BANK");
module.exports = function(deployer, network, accounts) {
deployer.deploy(U_BANK, accounts[1])
};
