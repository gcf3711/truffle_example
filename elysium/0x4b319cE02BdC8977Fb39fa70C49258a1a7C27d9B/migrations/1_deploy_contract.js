const json = require("/workdir/truffle_example/elysium/0x4b319cE02BdC8977Fb39fa70C49258a1a7C27d9B/build/contracts/UNLB.json"); 
const contract = require('@truffle/contract'); 
const UNLB = contract(json); 
UNLB.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(UNLB, {from: accounts[0]})
};
