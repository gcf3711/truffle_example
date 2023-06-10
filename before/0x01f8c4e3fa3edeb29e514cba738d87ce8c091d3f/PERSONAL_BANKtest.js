const PERSONAL_BANK = artifacts.require("PERSONAL_BANK")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await PERSONAL_BANK.deployed()
    address = await PERSONAL_BANK.address
    try{
      result[1] = await instance.Initialized({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.Deposit({from: accounts[0], value: web3.utils.toWei("1.000000000000129")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.Collect(web3.utils.toBN("1000000000000129000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.Collect(web3.utils.toBN("1000000000000129000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
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
