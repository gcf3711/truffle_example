const json = require("/workdir/truffle_example/elysium/0xe4eabdca81e31d9acbc4af76b30f532b6ed7f3bf/build/contracts/Honey.json"); 
const contract = require('@truffle/contract'); 
const Honey = contract(json); 
Honey.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Honey, {from: accounts[0]})
};
