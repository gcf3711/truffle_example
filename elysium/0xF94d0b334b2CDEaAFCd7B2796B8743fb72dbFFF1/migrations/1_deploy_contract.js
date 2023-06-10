const json = require("/workdir/truffle_example/elysium/0xF94d0b334b2CDEaAFCd7B2796B8743fb72dbFFF1/build/contracts/Jitech.json"); 
const contract = require('@truffle/contract'); 
const Jitech = contract(json); 
Jitech.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Jitech, web3.utils.toBN("50000000000000000000000000"), "Jitech", web3.utils.toBN("18"), "JTH", {from: accounts[0]})
};
