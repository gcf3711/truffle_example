const json = require("/workdir/truffle_example/elysium/0xc8986ecd41fb420268f1f4285931379357c4142b/build/contracts/YobCoinCrowdsale.json"); 
const contract = require('@truffle/contract'); 
const YobCoinCrowdsale = contract(json); 
YobCoinCrowdsale.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(YobCoinCrowdsale, {from: accounts[0]})
};
