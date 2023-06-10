const json = require("/workdir/truffle_example/elysium/0x4D391B4350cA1C690eBaf00d35bfcDd5721470F8/build/contracts/Betcash.json"); 
const contract = require('@truffle/contract'); 
const Betcash = contract(json); 
Betcash.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Betcash, web3.utils.toBN("99000000000000000000000000"), "Betcash", web3.utils.toBN("18"), "BC", {from: accounts[0]})
};
