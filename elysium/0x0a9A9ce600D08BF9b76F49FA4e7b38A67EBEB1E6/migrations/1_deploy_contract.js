const json = require("/workdir/truffle_example/elysium/0x0a9A9ce600D08BF9b76F49FA4e7b38A67EBEB1E6/build/contracts/GrowToken.json"); 
const contract = require('@truffle/contract'); 
const GrowToken = contract(json); 
GrowToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(GrowToken, {from: accounts[0]})
};
