const SpadePreSale = artifacts.require("SpadePreSale");
module.exports = function(deployer, network, accounts) {
deployer.deploy(SpadePreSale, accounts[0], accounts[39])
};
