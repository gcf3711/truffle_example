const MalaysianCoin = artifacts.require("MalaysianCoin")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await MalaysianCoin.deployed()
    address = await MalaysianCoin.address
  }
catch(error) {
console.log(error)
  }
  callback()
}
