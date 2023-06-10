const PrivateBank = artifacts.require("PrivateBank")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await PrivateBank.deployed()
    address = await PrivateBank.address
    try{
      result[1] = await instance.Deposit({from: accounts[0], value: web3.utils.toWei("1.000000077982395")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
  }
catch(error) {
console.log(error)
  }
  callback()
}
