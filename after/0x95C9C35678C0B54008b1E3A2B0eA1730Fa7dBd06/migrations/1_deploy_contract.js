const GoodTo = artifacts.require("GoodTo");
module.exports = function(deployer, network, accounts) {
deployer.deploy(GoodTo, web3.utils.toBN("100000000"), "GoodTo", "GTO")
};
