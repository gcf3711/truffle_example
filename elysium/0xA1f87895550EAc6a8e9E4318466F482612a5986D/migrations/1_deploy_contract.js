const json = require("/workdir/truffle_example/elysium/0xA1f87895550EAc6a8e9E4318466F482612a5986D/build/contracts/GZSToken.json"); 
const contract = require('@truffle/contract'); 
const GZSToken = contract(json); 
GZSToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(GZSToken, web3.utils.toBN("1800000000000000000000000000"), "GZS Token", web3.utils.toBN("18"), "GZS", {from: accounts[0]})
};
