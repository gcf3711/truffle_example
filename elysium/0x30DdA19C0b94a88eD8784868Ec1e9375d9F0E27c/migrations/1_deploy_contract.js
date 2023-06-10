const json = require("/workdir/truffle_example/elysium/0x30DdA19C0b94a88eD8784868Ec1e9375d9F0E27c/build/contracts/DSPXToken.json"); 
const contract = require('@truffle/contract'); 
const DSPXToken = contract(json); 
DSPXToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(DSPXToken, accounts[105], accounts[239], {from: accounts[0]})
};
