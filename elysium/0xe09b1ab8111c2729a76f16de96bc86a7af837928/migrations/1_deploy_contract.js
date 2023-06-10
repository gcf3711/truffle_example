const json = require("/workdir/truffle_example/elysium/0xe09b1ab8111c2729a76f16de96bc86a7af837928/build/contracts/FiftyFlip.json"); 
const contract = require('@truffle/contract'); 
const FiftyFlip = contract(json); 
FiftyFlip.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(FiftyFlip, accounts[3], accounts[4], accounts[4], {from: accounts[0]})
};
