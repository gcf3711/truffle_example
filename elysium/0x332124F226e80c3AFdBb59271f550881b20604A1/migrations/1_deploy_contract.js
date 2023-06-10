const json = require("/workdir/truffle_example/elysium/0x332124F226e80c3AFdBb59271f550881b20604A1/build/contracts/PlazaToken.json"); 
const contract = require('@truffle/contract'); 
const PlazaToken = contract(json); 
PlazaToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(PlazaToken, web3.utils.toBN("960000000"), "Plaza Token", "PLAZA", {from: accounts[0]})
};
