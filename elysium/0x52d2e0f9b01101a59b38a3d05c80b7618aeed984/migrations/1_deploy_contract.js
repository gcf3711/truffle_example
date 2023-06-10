const json = require("/workdir/truffle_example/elysium/0x52d2e0f9b01101a59b38a3d05c80b7618aeed984/build/contracts/EtherGet.json"); 
const contract = require('@truffle/contract'); 
const EtherGet = contract(json); 
EtherGet.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(EtherGet, {from: accounts[0]})
};
