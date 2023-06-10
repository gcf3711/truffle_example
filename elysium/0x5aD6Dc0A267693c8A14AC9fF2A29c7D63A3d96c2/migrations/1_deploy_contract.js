const json = require("/workdir/truffle_example/elysium/0x5aD6Dc0A267693c8A14AC9fF2A29c7D63A3d96c2/build/contracts/MP3Coin.json"); 
const contract = require('@truffle/contract'); 
const MP3Coin = contract(json); 
MP3Coin.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MP3Coin, {from: accounts[0]})
};
