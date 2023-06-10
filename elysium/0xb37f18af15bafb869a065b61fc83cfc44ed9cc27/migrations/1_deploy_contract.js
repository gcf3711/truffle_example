const json = require("/workdir/truffle_example/elysium/0xb37f18af15bafb869a065b61fc83cfc44ed9cc27/build/contracts/SimpleWallet.json"); 
const contract = require('@truffle/contract'); 
const SimpleWallet = contract(json); 
SimpleWallet.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(SimpleWallet, {from: accounts[0]})
};
