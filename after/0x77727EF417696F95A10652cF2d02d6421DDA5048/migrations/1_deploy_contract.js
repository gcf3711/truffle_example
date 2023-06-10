const MoneyChainNetToken = artifacts.require("MoneyChainNetToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MoneyChainNetToken)
};
