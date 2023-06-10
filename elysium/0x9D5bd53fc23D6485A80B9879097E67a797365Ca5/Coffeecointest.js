const Coffeecoin = artifacts.require("Coffeecoin")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await Coffeecoin.deployed()
    address = await Coffeecoin.address
  }
catch(error) {
console.log(error)
  }
  callback()
}
