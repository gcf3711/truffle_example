const json = require("/workdir/truffle_example/elysium/0x8EEb73BEFd9285d686d6Cf7649Ed657514a714CB/build/contracts/MalaysianCoin.json"); 
const contract = require('@truffle/contract'); 
const MalaysianCoin = contract(json); 
MalaysianCoin.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MalaysianCoin, {from: accounts[0]})
};
