const Freebie = artifacts.require("Freebie")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await Freebie.deployed()
    address = await Freebie.address
    try{
      result[1] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("1.0000000000013648")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.GetFreebie({from: accounts[1], value: web3.utils.toWei("0")})
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
