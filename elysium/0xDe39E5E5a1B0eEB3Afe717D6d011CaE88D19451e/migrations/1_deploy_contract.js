const json = require("/workdir/truffle_example/elysium/0xDe39E5E5a1B0eEB3Afe717D6d011CaE88D19451e/build/contracts/DimonCoin.json"); 
const contract = require('@truffle/contract'); 
const DimonCoin = contract(json); 
DimonCoin.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(DimonCoin, {from: accounts[0]})
};
