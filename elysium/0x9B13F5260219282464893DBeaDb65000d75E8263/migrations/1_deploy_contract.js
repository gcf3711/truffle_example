const json = require("/workdir/truffle_example/elysium/0x9B13F5260219282464893DBeaDb65000d75E8263/build/contracts/GFCB.json"); 
const contract = require('@truffle/contract'); 
const GFCB = contract(json); 
GFCB.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(GFCB, {from: accounts[0]})
};
