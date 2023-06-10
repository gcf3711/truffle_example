const json = require("/workdir/truffle_example/elysium/0x47427A4921bdF2b3ac75eCF53193A5265aF4a12F/build/contracts/WMCToken.json"); 
const contract = require('@truffle/contract'); 
const WMCToken = contract(json); 
WMCToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(WMCToken, web3.utils.toBN("1500000000"), "WeMediaChain", "WMC", {from: accounts[0]})
};
