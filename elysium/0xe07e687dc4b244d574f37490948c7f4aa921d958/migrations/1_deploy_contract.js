const json = require("/workdir/truffle_example/elysium/0xe07e687dc4b244d574f37490948c7f4aa921d958/build/contracts/ApplauseCashCrowdsale.json"); 
const contract = require('@truffle/contract'); 
const ApplauseCashCrowdsale = contract(json); 
ApplauseCashCrowdsale.setProvider(this.web3._provider); 

module.exports = function(deployer, network, accounts) {
deployer.deploy(ApplauseCashCrowdsale, web3.utils.toBN("1516280400"), web3.utils.toBN("1516856400"), web3.utils.toBN("30000000000"), web3.utils.toBN("1517490000"), web3.utils.toBN("1519880400"), web3.utils.toBN("1440000000000"), web3.utils.toBN("500000000"), web3.utils.toBN("500"), accounts[132], {from: accounts[0]}, {from: accounts[0]})
};
