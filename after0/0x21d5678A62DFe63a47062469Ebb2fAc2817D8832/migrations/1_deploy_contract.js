const YoloToken = artifacts.require("YoloToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(YoloToken)
};
