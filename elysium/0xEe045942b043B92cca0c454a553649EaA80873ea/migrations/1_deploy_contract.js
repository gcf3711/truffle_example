const json = require("/workdir/truffle_example/elysium/0xEe045942b043B92cca0c454a553649EaA80873ea/build/contracts/TokenERC20.json"); 
const contract = require('@truffle/contract'); 
const TokenERC20 = contract(json); 
TokenERC20.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(TokenERC20, {from: accounts[0]})
};
