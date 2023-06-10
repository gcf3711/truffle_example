const Crowdsale = artifacts.require("Crowdsale");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Crowdsale, "PRESale", "PRE1", "PRE1", web3.utils.toBN("1000"))
};
