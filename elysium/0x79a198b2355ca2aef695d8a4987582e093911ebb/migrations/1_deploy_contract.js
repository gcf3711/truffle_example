const json = require("/workdir/truffle_example/elysium/0x79a198b2355ca2aef695d8a4987582e093911ebb/build/contracts/SiringClockAuction.json"); 
const contract = require('@truffle/contract'); 
const SiringClockAuction = contract(json); 
SiringClockAuction.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(SiringClockAuction, accounts[86], web3.utils.toBN("300"), {from: accounts[0]})
};
