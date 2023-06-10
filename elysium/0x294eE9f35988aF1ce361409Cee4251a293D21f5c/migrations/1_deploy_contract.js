const json = require("/workdir/truffle_example/elysium/0x294eE9f35988aF1ce361409Cee4251a293D21f5c/build/contracts/MyAdvancedToken.json"); 
const contract = require('@truffle/contract'); 
const MyAdvancedToken = contract(json); 
MyAdvancedToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyAdvancedToken, web3.utils.toBN("1000000000"), "Coinstar", "CSTR", {from: accounts[0]})
};
