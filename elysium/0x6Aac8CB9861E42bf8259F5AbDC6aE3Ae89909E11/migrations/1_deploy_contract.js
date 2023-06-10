const json = require("/workdir/truffle_example/elysium/0x6Aac8CB9861E42bf8259F5AbDC6aE3Ae89909E11/build/contracts/BitcoinRed.json"); 
const contract = require('@truffle/contract'); 
const BitcoinRed = contract(json); 
BitcoinRed.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(BitcoinRed, {from: accounts[0]})
};
