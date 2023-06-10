const json = require("/workdir/truffle_example/elysium/0xa46edd6a9a93feec36576ee5048146870ea2c3ae/build/contracts/EBU.json"); 
const contract = require('@truffle/contract'); 
const EBU = contract(json); 
EBU.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(EBU, {from: accounts[0]})
};
