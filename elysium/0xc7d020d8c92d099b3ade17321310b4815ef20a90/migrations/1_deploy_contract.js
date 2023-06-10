const json = require("/workdir/truffle_example/elysium/0xc7d020d8c92d099b3ade17321310b4815ef20a90/build/contracts/AirDrop.json"); 
const contract = require('@truffle/contract'); 
const AirDrop = contract(json); 
AirDrop.setProvider(this.web3._provider); 

const json_2 = require("/workdir/truffle_example/elysium/0xc7d020d8c92d099b3ade17321310b4815ef20a90/build/contracts/EqualToken.json"); 
const contract_2 = require('@truffle/contract'); 
const EqualToken = contract_2(json_2); 
EqualToken.setProvider(this.web3._provider); 

module.exports = function(deployer, network, accounts) {
deployer.deploy(AirDrop, {from: accounts[0]})
deployer.deploy(EqualToken, {from: accounts[0]})
};
