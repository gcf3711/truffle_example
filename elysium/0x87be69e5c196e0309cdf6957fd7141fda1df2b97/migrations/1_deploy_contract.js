const json = require("/workdir/truffle_example/elysium/0x87be69e5c196e0309cdf6957fd7141fda1df2b97/build/contracts/SaleExtendedBCO.json"); 
const contract = require('@truffle/contract'); 
const SaleExtendedBCO = contract(json); 
SaleExtendedBCO.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(SaleExtendedBCO, web3.utils.toBN("1504866894"), web3.utils.toBN("1505779200"), web3.utils.toBN("7575758"), accounts[40], {from: accounts[0]})
};
