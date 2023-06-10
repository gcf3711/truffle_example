const MAVCash = artifacts.require("MAVCash");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MAVCash, web3.utils.toBN("9000000000000000000000000"), "MAVCash", web3.utils.toBN("16"), "MAV")
};
