const json = require("/workdir/truffle_example/elysium/0xE2E6D4BE086c6938B53B22144855eef674281639/build/contracts/LinkToken.json"); 
const contract = require('@truffle/contract'); 
const LinkToken = contract(json); 
LinkToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(LinkToken, {from: accounts[0]})
};
