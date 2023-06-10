const IcoOKOToken = artifacts.require("IcoOKOToken");
const OKOToken = artifacts.require("OKOToken")
module.exports = function(deployer, network, accounts) {
    deployer.deploy(OKOToken).then(function(){
        return deployer.deploy(IcoOKOToken, accounts[149], OKOToken.address)
    })

};
