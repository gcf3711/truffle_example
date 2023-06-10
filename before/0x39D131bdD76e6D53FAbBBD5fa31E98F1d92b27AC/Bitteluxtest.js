const Bittelux = artifacts.require("Bittelux")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await Bittelux.deployed()
    address = await Bittelux.address
  }
catch(error) {
console.log(error)
  }
  callback()
}
