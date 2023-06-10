const json = require("/workdir/truffle_example/elysium/0x7241d179d92E86237bB460f8A19FAE369a8846a3/build/contracts/CGCToken.json"); 
const contract = require('@truffle/contract'); 
const CGCToken = contract(json); 
CGCToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(CGCToken, web3.utils.toBN("131000000"), "CGCToken", "CGC", {from: accounts[0]})
};
