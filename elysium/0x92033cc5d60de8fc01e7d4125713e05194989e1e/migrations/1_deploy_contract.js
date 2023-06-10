const json = require("/workdir/truffle_example/elysium/0x92033cc5d60de8fc01e7d4125713e05194989e1e/build/contracts/HodboCrowdsale.json"); 
const contract = require('@truffle/contract'); 
const HodboCrowdsale = contract(json); 
HodboCrowdsale.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(HodboCrowdsale, {from: accounts[0]})
};
