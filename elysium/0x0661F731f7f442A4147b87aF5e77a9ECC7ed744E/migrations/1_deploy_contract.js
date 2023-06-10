const json = require("/workdir/truffle_example/elysium/0x0661F731f7f442A4147b87aF5e77a9ECC7ed744E/build/contracts/ETY.json"); 
const contract = require('@truffle/contract'); 
const ETY = contract(json); 
ETY.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(ETY, accounts[63], {from: accounts[0]})
};
