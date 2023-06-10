const json = require("/workdir/truffle_example/elysium/0xb620cee6b52f96f3c6b253e6eea556aa2d214a99/build/contracts/DrainMe.json"); 
const contract = require('@truffle/contract'); 
const DrainMe = contract(json); 
DrainMe.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(DrainMe, {from: accounts[0]})
};
