const json = require("/workdir/truffle_example/elysium/0xB5335e24d0aB29C190AB8C2B459238Da1153cEBA/build/contracts/Hexagon.json"); 
const contract = require('@truffle/contract'); 
const Hexagon = contract(json); 
Hexagon.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Hexagon, {from: accounts[0]})
};
