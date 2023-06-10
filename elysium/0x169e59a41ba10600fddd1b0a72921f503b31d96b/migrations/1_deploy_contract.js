const json = require("/workdir/truffle_example/elysium/0x169e59a41ba10600fddd1b0a72921f503b31d96b/build/contracts/IcoOKOToken.json"); 
const contract = require('@truffle/contract'); 
const IcoOKOToken = contract(json); 
IcoOKOToken.setProvider(this.web3._provider); 
const json_2 = require("/workdir/truffle_example/elysium/0x169e59a41ba10600fddd1b0a72921f503b31d96b/build/contracts/OKOToken.json"); 
const contract_2 = require('@truffle/contract'); 
const OKOToken = contract_2(json_2); 
OKOToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
    deployer.deploy(OKOToken, {from: accounts[0]}).then(function(){
        return deployer.deploy(IcoOKOToken, accounts[149], OKOToken.address)
    })

};
