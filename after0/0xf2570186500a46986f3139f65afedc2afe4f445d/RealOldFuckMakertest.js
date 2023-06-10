const RealOldFuckMaker = artifacts.require("RealOldFuckMaker")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await RealOldFuckMaker.deployed()
    address = await RealOldFuckMaker.address
    try{
      result[1] = await instance.makeOldFucks(web3.utils.toBN("1"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.makeOldFucks(web3.utils.toBN("10"), {from: accounts[0], value: web3.utils.toWei("0")})
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
