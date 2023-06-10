const GZSToken = artifacts.require("GZSToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(GZSToken, web3.utils.toBN("1800000000000000000000000000"), "GZS Token", web3.utils.toBN("18"), "GZS")
};
