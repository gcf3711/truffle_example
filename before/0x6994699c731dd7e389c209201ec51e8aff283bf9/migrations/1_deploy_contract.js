const tokensale = artifacts.require("tokensale");
module.exports = function(deployer, network, accounts) {
deployer.deploy(tokensale, accounts[17], web3.utils.toBN("179200000"), web3.utils.toBN("192522320000000"))
};
