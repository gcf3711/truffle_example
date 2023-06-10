const Presale = artifacts.require("Presale");
const wallet = artifacts.require("MultiSigWalletWithDailyLimit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(wallet, [accounts[32], accounts[33], accounts[34], accounts[35]], 2, 0).then(function () {
        return(deployer.deploy(Presale, web3.utils.toBN("1505397600"), wallet.address))
    })

};
