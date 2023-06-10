const demo = artifacts.require("demo")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await demo.deployed()
    address = await demo.address
    try{
      result[1] = await instance.transfer(accounts[0], accounts[2], [accounts[1], accounts[1]], web3.utils.toBN("1000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.transfer(accounts[0], accounts[2], [accounts[1], accounts[1]], web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.transfer(accounts[0], accounts[2], [accounts[1], accounts[1]], web3.utils.toBN("1000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.transfer(accounts[0], accounts[2], [accounts[1], accounts[1]], web3.utils.toBN("666666"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.transfer(accounts[0], accounts[2], [accounts[1], accounts[1]], web3.utils.toBN("22222"), {from: accounts[0], value: web3.utils.toWei("0")})
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
