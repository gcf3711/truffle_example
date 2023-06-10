const json = require("/workdir/truffle_example/elysium/0x78c2a1e91b52bca4130b6ed9edd9fbcfd4671c37/build/contracts/WhaleGiveaway1.json"); 
const contract = require('@truffle/contract'); 
const WhaleGiveaway1 = contract(json); 
WhaleGiveaway1.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(WhaleGiveaway1, {from: accounts[0]})
};
