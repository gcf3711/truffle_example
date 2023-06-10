const WMCToken = artifacts.require("WMCToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(WMCToken, web3.utils.toBN("1500000000"), "WeMediaChain", "WMC")
};
