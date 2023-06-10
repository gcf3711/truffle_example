const Issuer = artifacts.require("Issuer");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Issuer, accounts[0], accounts[40], accounts[64])
};
