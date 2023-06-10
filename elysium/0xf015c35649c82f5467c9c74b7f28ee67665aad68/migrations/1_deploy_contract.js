const json = require("/workdir/truffle_example/elysium/0xf015c35649c82f5467c9c74b7f28ee67665aad68/build/contracts/MY_BANK.json"); 
const contract = require('@truffle/contract'); 
const MY_BANK = contract(json); 
MY_BANK.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MY_BANK, accounts[1], {from: accounts[0]})
};
