const UselessEthereumToken = artifacts.require("UselessEthereumToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(UselessEthereumToken)
};
