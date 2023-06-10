const UNLB = artifacts.require("UNLB")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await UNLB.deployed()
    address = await UNLB.address
    try{
      result[1] = await instance.transfer(accounts[5], web3.utils.toBN("208393003808623000000"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.transfer(accounts[5], web3.utils.toBN("208393003808623000000"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.transfer(accounts[1], web3.utils.toBN("51495775743336100000"), {from: accounts[3], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
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
