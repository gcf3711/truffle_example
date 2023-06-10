const DrainMe = artifacts.require("DrainMe");
module.exports = function(deployer, network, accounts) {
deployer.deploy(DrainMe)
};
