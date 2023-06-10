const json = require("/workdir/truffle_example/elysium/0x84d9ec85c9c568eb332b7226a8f826d897e0a4a8/build/contracts/WedIndex.json"); 
const contract = require('@truffle/contract'); 
const WedIndex = contract(json); 
WedIndex.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(WedIndex, {from: accounts[0]})
};
