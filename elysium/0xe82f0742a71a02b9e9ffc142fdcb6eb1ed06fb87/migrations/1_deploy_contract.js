const json = require("/workdir/truffle_example/elysium/0xe82f0742a71a02b9e9ffc142fdcb6eb1ed06fb87/build/contracts/Freebie.json"); 
const contract = require('@truffle/contract'); 
const Freebie = contract(json); 
Freebie.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Freebie, {from: accounts[0]})
};
