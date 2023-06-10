const DestiNeedToken = artifacts.require("DestiNeedToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(DestiNeedToken)
};
