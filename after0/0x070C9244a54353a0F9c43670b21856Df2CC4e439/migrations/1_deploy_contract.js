const MoneyTreeToken = artifacts.require("MoneyTreeToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MoneyTreeToken)
};
