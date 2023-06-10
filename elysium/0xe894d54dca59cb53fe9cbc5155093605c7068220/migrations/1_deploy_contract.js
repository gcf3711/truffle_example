const json = require("/workdir/truffle_example/elysium/0xe894d54dca59cb53fe9cbc5155093605c7068220/build/contracts/airDrop.json"); 
const contract = require('@truffle/contract'); 
const airDrop = contract(json); 
airDrop.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(airDrop, {from: accounts[0]})
};
