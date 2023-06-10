const json = require("/workdir/truffle_example/elysium/0x9f03d94bf3545153cb28014bC7D1e7177cA99034/build/contracts/MyYLCToken.json"); 
const contract = require('@truffle/contract'); 
const MyYLCToken = contract(json); 
MyYLCToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyYLCToken, web3.utils.toBN("2000000000000000000"), "MyYLC", web3.utils.toBN("10"), "$", {from: accounts[0]})
};
