const json = require("/workdir/truffle_example/elysium/0x1C65557B72804569BcD25cE53575A9C712e2Eff5/build/contracts/Play2LivePromo.json"); 
const contract = require('@truffle/contract'); 
const Play2LivePromo = contract(json); 
Play2LivePromo.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Play2LivePromo, {from: accounts[0]})
};
