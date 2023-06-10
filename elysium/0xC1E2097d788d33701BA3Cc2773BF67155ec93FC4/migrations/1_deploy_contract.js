const json = require("/workdir/truffle_example/elysium/0xC1E2097d788d33701BA3Cc2773BF67155ec93FC4/build/contracts/IADOWR.json"); 
const contract = require('@truffle/contract'); 
const IADOWR = contract(json); 
IADOWR.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(IADOWR, {from: accounts[0]})
};
