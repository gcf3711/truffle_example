const json = require("/workdir/truffle_example/elysium/0xf29ebe930a539a60279ace72c707cba851a57707/build/contracts/B.json"); 
const contract = require('@truffle/contract'); 
const B = contract(json); 
B.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(B, {from: accounts[0]})
};
