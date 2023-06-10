const json = require("/workdir/truffle_example/elysium/0x0cbe050f75bc8f8c2d6c0d249fea125fd6e1acc9/build/contracts/Caller.json"); 
const contract = require('@truffle/contract'); 
const Caller = contract(json); 
Caller.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Caller, {from: accounts[0]})
};
