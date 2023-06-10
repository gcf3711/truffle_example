const MY_BANK = artifacts.require("MY_BANK");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MY_BANK, accounts[1])
};
