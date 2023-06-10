const json = require("/workdir/truffle_example/elysium/0x95C9C35678C0B54008b1E3A2B0eA1730Fa7dBd06/build/contracts/GoodTo.json"); 
const contract = require('@truffle/contract'); 
const GoodTo = contract(json); 
GoodTo.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(GoodTo, web3.utils.toBN("100000000"), "GoodTo", "GTO", {from: accounts[0]})
};
