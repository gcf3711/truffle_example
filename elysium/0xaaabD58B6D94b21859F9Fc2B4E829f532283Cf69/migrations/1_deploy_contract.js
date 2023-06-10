const json = require("/workdir/truffle_example/elysium/0xaaabD58B6D94b21859F9Fc2B4E829f532283Cf69/build/contracts/UCoinToken.json"); 
const contract = require('@truffle/contract'); 
const UCoinToken = contract(json); 
UCoinToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(UCoinToken, {from: accounts[0]})
};
