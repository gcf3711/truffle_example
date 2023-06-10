const ETH_FUND = artifacts.require("ETH_FUND");
module.exports = function(deployer, network, accounts) {
deployer.deploy(ETH_FUND, accounts[2])
};
