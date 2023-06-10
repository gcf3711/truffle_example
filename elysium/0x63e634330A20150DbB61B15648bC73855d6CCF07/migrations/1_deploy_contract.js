const json = require("/workdir/truffle_example/elysium/0x63e634330A20150DbB61B15648bC73855d6CCF07/build/contracts/BlocklancerToken.json"); 
const contract = require('@truffle/contract'); 
const BlocklancerToken = contract(json); 
BlocklancerToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(BlocklancerToken, {from: accounts[0]})
};
