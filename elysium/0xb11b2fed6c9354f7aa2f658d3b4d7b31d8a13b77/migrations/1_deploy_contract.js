const json = require("/workdir/truffle_example/elysium/0xb11b2fed6c9354f7aa2f658d3b4d7b31d8a13b77/build/contracts/DepositProxy.json"); 
const contract = require('@truffle/contract'); 
const DepositProxy = contract(json); 
DepositProxy.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(DepositProxy, {from: accounts[0]})
};
