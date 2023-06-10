const json = require("/workdir/truffle_example/elysium/0x74fA9AA30b1b35c8F5bDB76F079C2624FC0b6498/build/contracts/MoxyOnePresale.json"); 
const contract = require('@truffle/contract'); 
const MoxyOnePresale = contract(json); 
MoxyOnePresale.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MoxyOnePresale, {from: accounts[0]})
};
