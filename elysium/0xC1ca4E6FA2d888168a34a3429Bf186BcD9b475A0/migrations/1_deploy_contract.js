const json = require("/workdir/truffle_example/elysium/0xC1ca4E6FA2d888168a34a3429Bf186BcD9b475A0/build/contracts/HumanStandardToken.json"); 
const contract = require('@truffle/contract'); 
const HumanStandardToken = contract(json); 
HumanStandardToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(HumanStandardToken, web3.utils.toBN("1000000000"), "Pandora", web3.utils.toBN("6"), "PDX", {from: accounts[0]})
};
