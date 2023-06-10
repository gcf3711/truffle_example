const PrivateBank = artifacts.require("PrivateBank");
module.exports = function(deployer, network, accounts) {
deployer.deploy(PrivateBank, accounts[1])
};
