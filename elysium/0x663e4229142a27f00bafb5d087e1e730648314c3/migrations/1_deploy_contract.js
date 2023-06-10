const json = require("/workdir/truffle_example/elysium/0x663e4229142a27f00bafb5d087e1e730648314c3/build/contracts/PandaCore.json"); 
const contract = require('@truffle/contract'); 
const PandaCore = contract(json); 
PandaCore.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(PandaCore, {from: accounts[0]})
};
