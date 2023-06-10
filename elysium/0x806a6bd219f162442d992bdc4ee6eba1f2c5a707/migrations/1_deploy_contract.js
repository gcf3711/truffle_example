const json = require("/workdir/truffle_example/elysium/0x806a6bd219f162442d992bdc4ee6eba1f2c5a707/build/contracts/Pie.json"); 
const contract = require('@truffle/contract'); 
const Pie = contract(json); 
Pie.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Pie, {from: accounts[0]})
};
