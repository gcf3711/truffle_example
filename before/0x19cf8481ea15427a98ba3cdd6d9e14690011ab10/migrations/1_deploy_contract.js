const daoPOLSKAtokens = artifacts.require("daoPOLSKAtokens");
module.exports = function(deployer, network, accounts) {
deployer.deploy(daoPOLSKAtokens)
};
