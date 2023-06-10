const json = require("/workdir/truffle_example/elysium/0xB939C757bdFC75E28E1ae2b8c1a4640180B6087E/build/contracts/ReimburseToken.json"); 
const contract = require('@truffle/contract'); 
const ReimburseToken = contract(json); 
ReimburseToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(ReimburseToken, web3.utils.toBN("108000000"), {from: accounts[0]})
};
