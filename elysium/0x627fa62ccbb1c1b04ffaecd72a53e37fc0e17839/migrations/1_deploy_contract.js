const json = require("/workdir/truffle_example/elysium/0x627fa62ccbb1c1b04ffaecd72a53e37fc0e17839/build/contracts/TokenBank.json"); 
const contract = require('@truffle/contract'); 
const TokenBank = contract(json); 
TokenBank.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(TokenBank, {from: accounts[0]})
};
