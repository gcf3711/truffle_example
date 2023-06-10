const ApplauseCashCrowdsale = artifacts.require("ApplauseCashCrowdsale");
module.exports = function(deployer, network, accounts) {
deployer.deploy(ApplauseCashCrowdsale, web3.utils.toBN("1516280400"), web3.utils.toBN("1516856400"), web3.utils.toBN("30000000000"), web3.utils.toBN("1517490000"), web3.utils.toBN("1519880400"), web3.utils.toBN("1440000000000"), web3.utils.toBN("500000000"), web3.utils.toBN("500"), accounts[132])
};
