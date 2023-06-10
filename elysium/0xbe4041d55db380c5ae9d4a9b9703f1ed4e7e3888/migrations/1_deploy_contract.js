const json = require("/workdir/truffle_example/elysium/0xbe4041d55db380c5ae9d4a9b9703f1ed4e7e3888/build/contracts/MONEY_BOX.json"); 
const contract = require('@truffle/contract'); 
const MONEY_BOX = contract(json); 
MONEY_BOX.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MONEY_BOX, {from: accounts[0]})
};
