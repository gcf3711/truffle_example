const CTest7 = artifacts.require("CTest7")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await CTest7.deployed()
    address = await CTest7.address
    try{
      result[1] = await web3.eth.sendTransaction({to: address, from: accounts[1], value: web3.utils.toWei("0.0003")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.transfer(accounts[0], web3.utils.toBN("500000000000000000"), {from: accounts[1], value: web3.utils.toWei("0")})
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
