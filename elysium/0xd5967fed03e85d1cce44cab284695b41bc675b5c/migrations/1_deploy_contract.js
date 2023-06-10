const json = require("/workdir/truffle_example/elysium/0xd5967fed03e85d1cce44cab284695b41bc675b5c/build/contracts/demo.json"); 
const contract = require('@truffle/contract'); 
const demo = contract(json); 
demo.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(demo, {from: accounts[0]})
};
