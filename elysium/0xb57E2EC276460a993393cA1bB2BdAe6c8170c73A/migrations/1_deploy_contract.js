const json = require("/workdir/truffle_example/elysium/0xb57E2EC276460a993393cA1bB2BdAe6c8170c73A/build/contracts/CTB.json"); 
const contract = require('@truffle/contract'); 
const CTB = contract(json); 
CTB.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(CTB, web3.utils.toBN("300000000"), "CTB", web3.utils.toBN("0"), "CTB", {from: accounts[0]})
};
