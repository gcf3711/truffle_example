const Betcash = artifacts.require("Betcash");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Betcash, web3.utils.toBN("99000000000000000000000000"), "Betcash", web3.utils.toBN("18"), "BC")
};
