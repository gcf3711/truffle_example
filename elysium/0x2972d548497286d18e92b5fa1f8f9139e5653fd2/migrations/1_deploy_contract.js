const json = require("/workdir/truffle_example/elysium/0x2972d548497286d18e92b5fa1f8f9139e5653fd2/build/contracts/demo.json"); 
const contract = require('@truffle/contract'); 
const demo = contract(json); 
demo.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(demo, {from: accounts[0]})
};
