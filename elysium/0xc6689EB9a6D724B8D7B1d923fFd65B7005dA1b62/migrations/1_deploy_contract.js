const json = require("/workdir/truffle_example/elysium/0xc6689EB9a6D724B8D7B1d923fFd65B7005dA1b62/build/contracts/SEC.json"); 
const contract = require('@truffle/contract'); 
const SEC = contract(json); 
SEC.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(SEC, {from: accounts[0]})
};
