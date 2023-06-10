const json = require("/workdir/truffle_example/elysium/0x8505185D59CA2B1381A727C3429098C62B18E71a/build/contracts/NGToken.json"); 
const contract = require('@truffle/contract'); 
const NGToken = contract(json); 
NGToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(NGToken, {from: accounts[0]})
};
