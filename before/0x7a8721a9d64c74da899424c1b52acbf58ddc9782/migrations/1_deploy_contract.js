const PrivateDeposit = artifacts.require("PrivateDeposit");
module.exports = function(deployer, network, accounts) {
deployer.deploy(PrivateDeposit)
};
