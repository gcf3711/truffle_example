const json = require("/workdir/truffle_example/elysium/0x6FC9c554C2363805673F18b3A2b1912cCE8Bfb8a/build/contracts/RocketCoin.json"); 
const contract = require('@truffle/contract'); 
const RocketCoin = contract(json); 
RocketCoin.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(RocketCoin, {from: accounts[0]})
};
