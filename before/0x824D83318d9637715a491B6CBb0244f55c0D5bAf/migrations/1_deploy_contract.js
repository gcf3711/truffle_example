const DYC = artifacts.require("DYC");
module.exports = function(deployer, network, accounts) {
deployer.deploy(DYC, web3.utils.toBN("1500000000"), "DYchain", "DYC")
};
