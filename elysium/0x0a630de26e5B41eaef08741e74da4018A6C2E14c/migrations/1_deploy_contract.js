const json = require("/workdir/truffle_example/elysium/0x0a630de26e5B41eaef08741e74da4018A6C2E14c/build/contracts/dgame.json"); 
const contract = require('@truffle/contract'); 
const dgame = contract(json); 
dgame.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(dgame, {from: accounts[0]})
};
