const json = require("/workdir/truffle_example/elysium/0x7a4349a749e59a5736efb7826ee3496a2dfd5489/build/contracts/WhaleGiveaway1.json"); 
const contract = require('@truffle/contract'); 
const WhaleGiveaway1 = contract(json); 
WhaleGiveaway1.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(WhaleGiveaway1, {from: accounts[0]})
};
