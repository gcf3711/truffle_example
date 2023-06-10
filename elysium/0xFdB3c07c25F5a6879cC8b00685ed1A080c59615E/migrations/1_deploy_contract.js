const json = require("/workdir/truffle_example/elysium/0xFdB3c07c25F5a6879cC8b00685ed1A080c59615E/build/contracts/SpadeIco.json"); 
const contract = require('@truffle/contract'); 
const SpadeIco = contract(json); 
SpadeIco.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(SpadeIco, accounts[0], accounts[51], accounts[0], {from: accounts[0]})
};
