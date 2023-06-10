const json = require("/workdir/truffle_example/elysium/0x96edbe868531bd23a6c05e9d0c424ea64fb1b78b/build/contracts/PENNY_BY_PENNY.json"); 
const contract = require('@truffle/contract'); 
const PENNY_BY_PENNY = contract(json); 
PENNY_BY_PENNY.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(PENNY_BY_PENNY, {from: accounts[0]})
};
