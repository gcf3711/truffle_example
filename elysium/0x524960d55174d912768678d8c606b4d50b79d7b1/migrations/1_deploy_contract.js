const json = require("/workdir/truffle_example/elysium/0x524960d55174d912768678d8c606b4d50b79d7b1/build/contracts/Centra4.json"); 
const contract = require('@truffle/contract'); 
const Centra4 = contract(json); 
Centra4.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Centra4, {from: accounts[0]})
};
