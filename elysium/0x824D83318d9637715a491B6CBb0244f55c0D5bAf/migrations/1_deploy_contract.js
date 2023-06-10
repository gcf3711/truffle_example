const json = require("/workdir/truffle_example/elysium/0x824D83318d9637715a491B6CBb0244f55c0D5bAf/build/contracts/DYC.json"); 
const contract = require('@truffle/contract'); 
const DYC = contract(json); 
DYC.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(DYC, web3.utils.toBN("1500000000"), "DYchain", "DYC", {from: accounts[0]})
};
