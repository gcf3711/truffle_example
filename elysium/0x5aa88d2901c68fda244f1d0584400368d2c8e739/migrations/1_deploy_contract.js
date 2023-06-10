const json = require("/workdir/truffle_example/elysium/0x5aa88d2901c68fda244f1d0584400368d2c8e739/build/contracts/MultiplicatorX3.json"); 
const contract = require('@truffle/contract'); 
const MultiplicatorX3 = contract(json); 
MultiplicatorX3.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MultiplicatorX3, {from: accounts[0]})
};
