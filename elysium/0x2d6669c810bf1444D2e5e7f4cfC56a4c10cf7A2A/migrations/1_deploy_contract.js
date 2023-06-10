const json = require("/workdir/truffle_example/elysium/0x2d6669c810bf1444D2e5e7f4cfC56a4c10cf7A2A/build/contracts/HYIPToken.json"); 
const contract = require('@truffle/contract'); 
const HYIPToken = contract(json); 
HYIPToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(HYIPToken, accounts[0], "HYIP Token 1.0", "HYIP", web3.utils.toBN("0"), web3.utils.toBN("0"), {from: accounts[0]})
};
