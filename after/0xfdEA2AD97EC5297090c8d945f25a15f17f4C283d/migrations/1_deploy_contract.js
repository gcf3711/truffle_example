const FreeCoin = artifacts.require("FreeCoin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(FreeCoin, web3.utils.toBN("1000000000"), "FreeCoin", "FREE")
};
