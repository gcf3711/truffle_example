const json = require("/workdir/truffle_example/elysium/0x4b71ad9c1a84b9b643aa54fdd66e2dec96e8b152/build/contracts/airPort.json"); 
const contract = require('@truffle/contract'); 
const airPort = contract(json); 
airPort.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(airPort, {from: accounts[0]})
};
