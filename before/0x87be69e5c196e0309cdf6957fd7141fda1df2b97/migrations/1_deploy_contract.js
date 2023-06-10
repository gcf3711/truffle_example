const SaleExtendedBCO = artifacts.require("SaleExtendedBCO");
module.exports = function(deployer, network, accounts) {
deployer.deploy(SaleExtendedBCO, web3.utils.toBN("1504866894"), web3.utils.toBN("1505779200"), web3.utils.toBN("7575758"), accounts[40])
};
