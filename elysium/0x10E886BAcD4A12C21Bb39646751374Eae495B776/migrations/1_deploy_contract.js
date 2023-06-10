const json = require("/workdir/truffle_example/elysium/0x10E886BAcD4A12C21Bb39646751374Eae495B776/build/contracts/Krown.json"); 
const contract = require('@truffle/contract'); 
const Krown = contract(json); 
Krown.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Krown, web3.utils.toBN("0"), "Krown", web3.utils.toBN("8"), "KRO", accounts[2], {from: accounts[0]})
};
