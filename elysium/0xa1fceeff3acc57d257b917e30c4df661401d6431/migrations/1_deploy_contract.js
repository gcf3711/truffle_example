const json = require("/workdir/truffle_example/elysium/0xa1fceeff3acc57d257b917e30c4df661401d6431/build/contracts/AirDropContract.json"); 
const contract = require('@truffle/contract'); 
const AirDropContract = contract(json); 
AirDropContract.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(AirDropContract, {from: accounts[0]})
};
