const json = require("/workdir/truffle_example/elysium/0xf70d589d76eebdd7c12cc5eec99f8f6fa4233b9e/build/contracts/WhaleGiveaway2.json"); 
const contract = require('@truffle/contract'); 
const WhaleGiveaway2 = contract(json); 
WhaleGiveaway2.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(WhaleGiveaway2, {from: accounts[0]})
};
