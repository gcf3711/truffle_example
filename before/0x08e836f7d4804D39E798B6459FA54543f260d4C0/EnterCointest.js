const EnterCoin = artifacts.require("EnterCoin")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await EnterCoin.deployed()
    address = await EnterCoin.address
  }
catch(error) {
console.log(error)
  }
  callback()
}
