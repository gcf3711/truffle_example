const json = require("/workdir/truffle_example/elysium/0x687D9d6839817db4574AED33f45647109DFe9C2d/build/contracts/ChuCunLingAIGO.json"); 
const contract = require('@truffle/contract'); 
const ChuCunLingAIGO = contract(json); 
ChuCunLingAIGO.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(ChuCunLingAIGO, web3.utils.toBN("1000000000000000000000000000"), "ChuCunLingAIGO", web3.utils.toBN("18"), "CCLAG", {from: accounts[0]})
};
