const json = require("/workdir/truffle_example/elysium/0x3AC96Bbe8b60D715fD818B3FE242EdF9dEF20571/build/contracts/MyBoToken.json"); 
const contract = require('@truffle/contract'); 
const MyBoToken = contract(json); 
MyBoToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyBoToken, web3.utils.toBN("2000000000000000000"), "MyBO", web3.utils.toBN("10"), "$", {from: accounts[0]})
};
