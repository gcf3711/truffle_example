const developer_Crowdsale = artifacts.require("developer_Crowdsale");
module.exports = function(deployer, network, accounts) {
deployer.deploy(developer_Crowdsale)
};
