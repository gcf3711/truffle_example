const json = require("/workdir/truffle_example/elysium/0x6a57883b5748bf3631ac2e0d43bf0d6f6cbcd16b/build/contracts/LescoinPreSale.json"); 
const contract = require('@truffle/contract'); 
const LescoinPreSale = contract(json); 
LescoinPreSale.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(LescoinPreSale, accounts[12], accounts[1], web3.utils.toBN("24000"), web3.utils.toBN("100"), accounts[50], {from: accounts[0]})
};
