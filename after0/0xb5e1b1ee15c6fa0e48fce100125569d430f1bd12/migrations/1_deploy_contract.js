const Private_Bank = artifacts.require("Private_Bank");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Private_Bank, accounts[1])
};
