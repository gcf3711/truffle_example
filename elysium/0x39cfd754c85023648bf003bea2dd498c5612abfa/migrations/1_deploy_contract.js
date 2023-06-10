const json = require("/workdir/truffle_example/elysium/0x39cfd754c85023648bf003bea2dd498c5612abfa/build/contracts/TokenBank.json"); 
const contract = require('@truffle/contract'); 
const TokenBank = contract(json); 
TokenBank.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(TokenBank, {from: accounts[0]})
};
