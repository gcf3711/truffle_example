const json = require("/workdir/truffle_example/elysium/0xec329ffc97d75fe03428ae155fc7793431487f63/build/contracts/TokenSender.json"); 
const contract = require('@truffle/contract'); 
const TokenSender = contract(json); 
TokenSender.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(TokenSender,accounts[0], {from: accounts[0]})
};
