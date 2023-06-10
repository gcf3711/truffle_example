const json = require("/workdir/truffle_example/elysium/0xbebbfe5b549f5db6e6c78ca97cac19d1fb03082c/build/contracts/VaultProxy.json"); 
const contract = require('@truffle/contract'); 
const VaultProxy = contract(json); 
VaultProxy.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(VaultProxy, {from: accounts[0]})
};
