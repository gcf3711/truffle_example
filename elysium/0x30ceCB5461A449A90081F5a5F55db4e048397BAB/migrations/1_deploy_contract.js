const json = require("/workdir/truffle_example/elysium/0x30ceCB5461A449A90081F5a5F55db4e048397BAB/build/contracts/Tracto.json"); 
const contract = require('@truffle/contract'); 
const Tracto = contract(json); 
Tracto.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Tracto, {from: accounts[0]})
};
