const DepositProxy = artifacts.require("DepositProxy");
module.exports = function(deployer, network, accounts) {
deployer.deploy(DepositProxy)
};
