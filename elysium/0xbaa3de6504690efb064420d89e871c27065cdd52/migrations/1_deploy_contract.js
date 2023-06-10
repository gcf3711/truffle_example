const json = require("/workdir/truffle_example/elysium/0xbaa3de6504690efb064420d89e871c27065cdd52/build/contracts/VaultProxy.json"); 
const contract = require('@truffle/contract'); 
const VaultProxy = contract(json); 
VaultProxy.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(VaultProxy, {from: accounts[0]})
};
