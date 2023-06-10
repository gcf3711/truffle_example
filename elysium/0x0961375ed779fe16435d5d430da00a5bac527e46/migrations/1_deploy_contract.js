const json = require("/workdir/truffle_example/elysium/0x0961375ed779fe16435d5d430da00a5bac527e46/build/contracts/Presale.json"); 
const contract = require('@truffle/contract'); 
const Presale = contract(json); 
Presale.setProvider(this.web3._provider); 

const json_2 = require("/workdir/truffle_example/elysium/0x0961375ed779fe16435d5d430da00a5bac527e46/build/contracts/MultiSigWalletWithDailyLimit.json"); 
const contract_2 = require('@truffle/contract'); 
const wallet = contract_2(json_2); 
wallet.setProvider(this.web3._provider); 

module.exports = function(deployer, network, accounts) {
    deployer.deploy(wallet, [accounts[32], accounts[33], accounts[34], accounts[35]], 2, 0, {from: accounts[0]}).then(function (){
        return(deployer.deploy(Presale, web3.utils.toBN("1505397600"), wallet.address))
    })

};
