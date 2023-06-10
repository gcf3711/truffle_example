const CGCToken = artifacts.require("CGCToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(CGCToken, web3.utils.toBN("131000000"), "CGCToken", "CGC")
};
