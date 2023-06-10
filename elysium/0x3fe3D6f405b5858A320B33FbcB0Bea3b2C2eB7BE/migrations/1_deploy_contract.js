const json = require("/workdir/truffle_example/elysium/0x3fe3D6f405b5858A320B33FbcB0Bea3b2C2eB7BE/build/contracts/MyToken.json"); 
const contract = require('@truffle/contract'); 
const MyToken = contract(json); 
MyToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyToken, web3.utils.toBN("18000000000"), "SingaporeCoinOrigin", web3.utils.toBN("2"), "SCO", accounts[0], {from: accounts[0]})
};
