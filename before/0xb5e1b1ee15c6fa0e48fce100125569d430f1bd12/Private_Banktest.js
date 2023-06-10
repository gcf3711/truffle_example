const Private_Bank = artifacts.require("Private_Bank")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await Private_Bank.deployed()
    address = await Private_Bank.address
    try{
      result[1] = await instance.Deposit({from: accounts[0], value: web3.utils.toWei("1.000000003236648")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.CashOut(web3.utils.toBN("1000000003236648000"), {from: accounts[0], value: web3.utils.toWei("0")})
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
