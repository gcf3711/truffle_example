const json = require("/workdir/truffle_example/elysium/0x68E03D2DA62D026403C68601D650c877901876BF/build/contracts/ModiTokenERC20.json"); 
const contract = require('@truffle/contract'); 
const ModiTokenERC20 = contract(json); 
ModiTokenERC20.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(ModiTokenERC20, web3.utils.toBN("10000"), "MODI Token", "MODI", {from: accounts[0]})
};
