const json = require("/workdir/truffle_example/elysium/0xb75a5e36cC668bC8Fe468e8f272Cd4a0fd0fd773/build/contracts/Token.json"); 
const contract = require('@truffle/contract'); 
const Token = contract(json); 
Token.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Token, web3.utils.toBN("2000000000"), "Social Chain", web3.utils.toBN("8"), "SCA", accounts[181], {from: accounts[0]})
};
