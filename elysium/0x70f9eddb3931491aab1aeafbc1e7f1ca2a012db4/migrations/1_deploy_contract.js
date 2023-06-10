const json = require("/workdir/truffle_example/elysium/0x70f9eddb3931491aab1aeafbc1e7f1ca2a012db4/build/contracts/HomeyJar.json"); 
const contract = require('@truffle/contract'); 
const HomeyJar = contract(json); 
HomeyJar.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(HomeyJar, {from: accounts[0]})
};
