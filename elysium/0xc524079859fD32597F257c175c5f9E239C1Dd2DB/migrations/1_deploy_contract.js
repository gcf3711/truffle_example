const json = require("/workdir/truffle_example/elysium/0xc524079859fD32597F257c175c5f9E239C1Dd2DB/build/contracts/EncryptedToken.json"); 
const contract = require('@truffle/contract'); 
const EncryptedToken = contract(json); 
EncryptedToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(EncryptedToken, {from: accounts[0]})
};
