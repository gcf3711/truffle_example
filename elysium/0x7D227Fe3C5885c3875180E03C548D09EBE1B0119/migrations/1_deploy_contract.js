const json = require("/workdir/truffle_example/elysium/0x7D227Fe3C5885c3875180E03C548D09EBE1B0119/build/contracts/EncryptedToken.json"); 
const contract = require('@truffle/contract'); 
const EncryptedToken = contract(json); 
EncryptedToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(EncryptedToken, {from: accounts[0]})
};
