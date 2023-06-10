const json = require("/workdir/truffle_example/elysium/0x9d06cbafa865037a01d322d3f4222fa3e04e5488/build/contracts/Delta.json"); 
const contract = require('@truffle/contract'); 
const Delta = contract(json); 
Delta.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Delta, {from: accounts[0]})
};
