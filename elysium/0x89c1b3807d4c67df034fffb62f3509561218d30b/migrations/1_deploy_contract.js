const json = require("/workdir/truffle_example/elysium/0x89c1b3807d4c67df034fffb62f3509561218d30b/build/contracts/TownCrier.json"); 
const contract = require('@truffle/contract'); 
const TownCrier = contract(json); 
TownCrier.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(TownCrier, {from: accounts[0]})
};
