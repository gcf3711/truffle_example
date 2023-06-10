const DaddyToken = artifacts.require("DaddyToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(DaddyToken, web3.utils.toBN("250000"), "DaddyToken", "DDT")
};
