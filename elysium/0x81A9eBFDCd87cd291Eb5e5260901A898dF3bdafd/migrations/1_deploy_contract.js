const json = require("/workdir/truffle_example/elysium/0x81A9eBFDCd87cd291Eb5e5260901A898dF3bdafd/build/contracts/DaddyToken.json"); 
const contract = require('@truffle/contract'); 
const DaddyToken = contract(json); 
DaddyToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(DaddyToken, web3.utils.toBN("250000"), "DaddyToken", "DDT", {from: accounts[0]})
};
