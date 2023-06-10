const json = require("/workdir/truffle_example/elysium/0x524A1407223446e3BAb8819ABb3fb8348C29afEc/build/contracts/sumocoin.json"); 
const contract = require('@truffle/contract'); 
const sumocoin = contract(json); 
sumocoin.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(sumocoin, {from: accounts[0]})
};
