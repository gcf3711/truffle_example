const json = require("/workdir/truffle_example/elysium/0x4051334adc52057aca763453820cb0e045076ef3/build/contracts/airdrop.json"); 
const contract = require('@truffle/contract'); 
const airdrop = contract(json); 
airdrop.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(airdrop, {from: accounts[0]})
};
