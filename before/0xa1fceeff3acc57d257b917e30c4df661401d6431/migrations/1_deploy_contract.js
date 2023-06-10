const AirDropContract = artifacts.require("AirDropContract");
module.exports = function(deployer, network, accounts) {
deployer.deploy(AirDropContract)
};
