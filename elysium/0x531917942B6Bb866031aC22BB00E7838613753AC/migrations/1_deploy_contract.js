const json = require("/workdir/truffle_example/elysium/0x531917942B6Bb866031aC22BB00E7838613753AC/build/contracts/TokenERC20.json"); 
const contract = require('@truffle/contract'); 
const TokenERC20 = contract(json); 
TokenERC20.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(TokenERC20, web3.utils.toBN("1000000000"), "Futures Pease", "FP", {from: accounts[0]})
};
