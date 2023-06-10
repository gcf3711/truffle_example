const json = require("/workdir/truffle_example/elysium/0x3e013fc32a54c4c5b6991ba539dcd0ec4355c859/build/contracts/MultiplicatorX4.json"); 
const contract = require('@truffle/contract'); 
const MultiplicatorX4 = contract(json); 
MultiplicatorX4.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MultiplicatorX4, {from: accounts[0]})
};
