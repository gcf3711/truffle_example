const json = require("/workdir/truffle_example/elysium/0x610495793564aed0f9c7fc48dc4c7c9151d34fd6/build/contracts/SimpleWallet.json"); 
const contract = require('@truffle/contract'); 
const SimpleWallet = contract(json); 
SimpleWallet.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(SimpleWallet, {from: accounts[0]})
};
