const json = require("/workdir/truffle_example/elysium/0x50ca2DE80e803bF4b00f188545BCA959540C5582/build/contracts/SpadePreSale.json"); 
const contract = require('@truffle/contract'); 
const SpadePreSale = contract(json); 
SpadePreSale.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(SpadePreSale, accounts[0], accounts[39], {from: accounts[0]})
};
