const json = require("/workdir/truffle_example/elysium/0x42CEE7DD9B47C2ceE35ca996a712E8c99471d46f/build/contracts/ALUXToken.json"); 
const contract = require('@truffle/contract'); 
const ALUXToken = contract(json); 
ALUXToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(ALUXToken, web3.utils.toBN("0"), "Alux Digital", "ALUX", {from: accounts[0]})
};
