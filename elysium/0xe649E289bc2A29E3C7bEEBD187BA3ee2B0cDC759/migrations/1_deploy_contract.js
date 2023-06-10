const json = require("/workdir/truffle_example/elysium/0xe649E289bc2A29E3C7bEEBD187BA3ee2B0cDC759/build/contracts/JiucaiToken.json"); 
const contract = require('@truffle/contract'); 
const JiucaiToken = contract(json); 
JiucaiToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(JiucaiToken, 1000, 1, "韭菜币", "JCT", {from: accounts[0]})
};
