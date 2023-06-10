const LescoinPreSale = artifacts.require("LescoinPreSale");
module.exports = function(deployer, network, accounts) {
deployer.deploy(LescoinPreSale, accounts[12], accounts[1], web3.utils.toBN("24000"), web3.utils.toBN("100"), accounts[50])
};
