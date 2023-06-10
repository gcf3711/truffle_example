const json = require("/workdir/truffle_example/elysium/0xAc3Da587eac229C9896D919aBC235CA4Fd7f72c1/build/contracts/MyAdvancedToken.json"); 
const contract = require('@truffle/contract'); 
const MyAdvancedToken = contract(json); 
MyAdvancedToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyAdvancedToken, web3.utils.toBN("20000000000"), "Target Coin", web3.utils.toBN("1"), "TGT", {from: accounts[0]})
};
