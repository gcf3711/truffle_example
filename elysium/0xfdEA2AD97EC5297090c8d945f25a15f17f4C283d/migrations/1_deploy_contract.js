const json = require("/workdir/truffle_example/elysium/0xfdEA2AD97EC5297090c8d945f25a15f17f4C283d/build/contracts/FreeCoin.json"); 
const contract = require('@truffle/contract'); 
const FreeCoin = contract(json); 
FreeCoin.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(FreeCoin, web3.utils.toBN("1000000000"), "FreeCoin", "FREE", {from: accounts[0]})
};
