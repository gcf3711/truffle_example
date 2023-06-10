const json = require("/workdir/truffle_example/elysium/0x3501ECfa3f8b188915C72f36A93566585ba99336/build/contracts/CTest7.json"); 
const contract = require('@truffle/contract'); 
const CTest7 = contract(json); 
CTest7.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(CTest7, {from: accounts[0]})
};
