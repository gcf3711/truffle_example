const json = require("/workdir/truffle_example/elysium/0xd113244b9049943d4bc6fef3048d24edf92dd788/build/contracts/Issuer.json"); 
const contract = require('@truffle/contract'); 
const Issuer = contract(json); 
Issuer.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Issuer, accounts[0], accounts[40], accounts[64], {from: accounts[0]})
};
