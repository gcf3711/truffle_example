const json = require("/workdir/truffle_example/elysium/0x7Dc4f41294697a7903C4027f6Ac528C5d14cd7eB/build/contracts/RemiCoin.json"); 
const contract = require('@truffle/contract'); 
const RemiCoin = contract(json); 
RemiCoin.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(RemiCoin, web3.utils.toBN("8400000000000000"), "RemiCoin", "RMC", web3.utils.toBN("8"), {from: accounts[0]})
};
