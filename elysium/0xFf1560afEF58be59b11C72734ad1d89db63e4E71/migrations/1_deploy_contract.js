const json = require("/workdir/truffle_example/elysium/0xFf1560afEF58be59b11C72734ad1d89db63e4E71/build/contracts/ExtremeToken.json"); 
const contract = require('@truffle/contract'); 
const ExtremeToken = contract(json); 
ExtremeToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(ExtremeToken, {from: accounts[0]})
};
