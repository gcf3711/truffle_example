const json = require("/workdir/truffle_example/elysium/0xd2018bfaa266a9ec0a1a84b061640faa009def76/build/contracts/Pie.json"); 
const contract = require('@truffle/contract'); 
const Pie = contract(json); 
Pie.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Pie, {from: accounts[0]})
};
