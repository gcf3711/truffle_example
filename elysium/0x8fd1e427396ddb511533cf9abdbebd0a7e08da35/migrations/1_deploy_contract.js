const json = require("/workdir/truffle_example/elysium/0x8fd1e427396ddb511533cf9abdbebd0a7e08da35/build/contracts/TokenBank.json"); 
const contract = require('@truffle/contract'); 
const TokenBank = contract(json); 
TokenBank.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(TokenBank, {from: accounts[0]})
};
