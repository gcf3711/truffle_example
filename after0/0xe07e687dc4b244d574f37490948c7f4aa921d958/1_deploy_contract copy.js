const ApplauseCashCrowdsale = artifacts.require("ApplauseCashCrowdsale");
const wallet = artifacts.require("Wallet")
module.exports = function(deployer, network, accounts) {
    deployer.deploy(wallet,[accounts[196],accounts[197]], 2, 1000000000000000000).then(function () {
        return deployer.deploy(ApplauseCashCrowdsale, 1516280400, 1516856400, 30000000000, 1517490000, 1519880400, 1440000000000, 500000000, 500, wallet.address)
    })
};
