const json = require("/workdir/truffle_example/elysium/0x9107C1B28d775E59f98BF3f4dE3b959816CF5526/build/contracts/MyAdvancedToken.json"); 
const contract = require('@truffle/contract'); 
const MyAdvancedToken = contract(json); 
MyAdvancedToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyAdvancedToken, 1000000000, "le's token", "8", {from: accounts[0]})
};
