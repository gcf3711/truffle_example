const json = require("/workdir/truffle_example/elysium/0x3f2ef511aa6e75231e4deafc7a3d2ecab3741de2/build/contracts/WhaleGiveaway2.json"); 
const contract = require('@truffle/contract'); 
const WhaleGiveaway2 = contract(json); 
WhaleGiveaway2.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(WhaleGiveaway2, {from: accounts[0]})
};
