const json = require("/workdir/truffle_example/elysium/0xdb1c55f6926e7d847ddf8678905ad871a68199d2/build/contracts/FreeEth.json"); 
const contract = require('@truffle/contract'); 
const FreeEth = contract(json); 
FreeEth.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(FreeEth, {from: accounts[0]})
};
