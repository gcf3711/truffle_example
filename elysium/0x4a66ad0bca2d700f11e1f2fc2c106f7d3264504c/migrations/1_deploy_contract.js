const json = require("/workdir/truffle_example/elysium/0x4a66ad0bca2d700f11e1f2fc2c106f7d3264504c/build/contracts/EBU.json"); 
const contract = require('@truffle/contract'); 
const EBU = contract(json); 
EBU.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(EBU, {from: accounts[0]})
};
