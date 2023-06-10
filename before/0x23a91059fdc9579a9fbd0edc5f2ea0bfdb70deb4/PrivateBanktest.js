const PrivateBank = artifacts.require("PrivateBank")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await PrivateBank.deployed()
    address = await PrivateBank.address
    try{
      result[1] = await instance.Deposit({from: accounts[3], value: web3.utils.toWei("1.000000001")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.Deposit({from: accounts[1], value: web3.utils.toWei("1.0000342315543")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.CashOut({from: accounts[2], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.CashOut(web3.utils.toBN("0"), {from: accounts[2], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.CashOut(web3.utils.toBN("2"), {from: accounts[2], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
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
