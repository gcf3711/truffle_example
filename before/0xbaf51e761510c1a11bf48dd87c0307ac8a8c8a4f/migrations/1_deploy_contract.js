const ETH_VAULT = artifacts.require("ETH_VAULT");
module.exports = function(deployer, network, accounts) {
deployer.deploy(ETH_VAULT, accounts[1])
};
