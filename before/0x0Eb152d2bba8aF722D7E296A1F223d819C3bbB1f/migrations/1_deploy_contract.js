const CarbonExchangeCoinToken = artifacts.require("CarbonExchangeCoinToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(CarbonExchangeCoinToken)
};
