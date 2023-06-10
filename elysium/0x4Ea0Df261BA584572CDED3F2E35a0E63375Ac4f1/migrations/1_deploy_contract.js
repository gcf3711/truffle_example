const json = require("/workdir/truffle_example/elysium/0x4Ea0Df261BA584572CDED3F2E35a0E63375Ac4f1/build/contracts/MyAdvancedToken.json"); 
const contract = require('@truffle/contract'); 
const MyAdvancedToken = contract(json); 
MyAdvancedToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyAdvancedToken, web3.utils.toBN("720000000"), "xtecoin's token", "XTECOIN", {from: accounts[0]})
};
