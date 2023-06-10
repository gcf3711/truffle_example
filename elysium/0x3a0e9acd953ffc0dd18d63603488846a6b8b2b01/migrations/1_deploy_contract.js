const json = require("/workdir/truffle_example/elysium/0x3a0e9acd953ffc0dd18d63603488846a6b8b2b01/build/contracts/TokenBank.json"); 
const contract = require('@truffle/contract'); 
const TokenBank = contract(json); 
TokenBank.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(TokenBank, {from: accounts[0]})
};
