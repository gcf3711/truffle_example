const PrivateDeposit = artifacts.require("PrivateDeposit")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await PrivateDeposit.deployed()
    address = await PrivateDeposit.address
    try{
      result[1] = await instance.Deposit({from: accounts[1], value: web3.utils.toWei("1.05")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.CashOut(web3.utils.toBN("1050000000000000000"), {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
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
