const AzurionToken = artifacts.require("AzurionToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(AzurionToken, web3.utils.toBN("70000000000000000000000000"), accounts[0])
};
