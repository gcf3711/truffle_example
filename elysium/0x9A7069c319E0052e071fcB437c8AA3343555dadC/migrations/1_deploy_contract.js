const json = require("/workdir/truffle_example/elysium/0x9A7069c319E0052e071fcB437c8AA3343555dadC/build/contracts/AzurionToken.json"); 
const contract = require('@truffle/contract'); 
const AzurionToken = contract(json); 
AzurionToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(AzurionToken, web3.utils.toBN("70000000000000000000000000"), accounts[0], {from: accounts[0]})
};
