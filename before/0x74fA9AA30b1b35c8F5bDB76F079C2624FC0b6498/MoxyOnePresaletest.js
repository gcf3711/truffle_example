const MoxyOnePresale = artifacts.require("MoxyOnePresale")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await MoxyOnePresale.deployed()
    address = await MoxyOnePresale.address
  }
catch(error) {
console.log(error)
  }
  callback()
}
