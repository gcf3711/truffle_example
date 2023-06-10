const json = require("/workdir/truffle_example/elysium/0xb7c5c5aa4d42967efe906e1b66cb8df9cebf04f7/build/contracts/keepMyEther.json"); 
const contract = require('@truffle/contract'); 
const keepMyEther = contract(json); 
keepMyEther.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(keepMyEther, {from: accounts[0]})
};
