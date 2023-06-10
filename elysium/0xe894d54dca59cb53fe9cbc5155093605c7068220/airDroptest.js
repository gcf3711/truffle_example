const airDrop = artifacts.require("airDrop")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await airDrop.deployed()
    address = await airDrop.address
    try{
      result[1] = await instance.transfer(accounts[0], accounts[4], [accounts[3], accounts[7], accounts[1]], web3.utils.toBN("880"), web3.utils.toBN("18"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.transfer(accounts[0], accounts[4], [accounts[3], accounts[7], accounts[1]], web3.utils.toBN("5"), web3.utils.toBN("18"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.transfer(accounts[0], accounts[4], [accounts[3], accounts[7], accounts[1]], web3.utils.toBN("8"), web3.utils.toBN("18"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.transfer(accounts[8], accounts[10], [accounts[5], accounts[6], accounts[2]], web3.utils.toBN("1"), web3.utils.toBN("18"), {from: accounts[8], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.transfer(accounts[8], accounts[10], [accounts[5], accounts[6]], web3.utils.toBN("2"), web3.utils.toBN("18"), {from: accounts[8], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.transfer(accounts[8], accounts[10], [accounts[9]], web3.utils.toBN("13"), web3.utils.toBN("18"), {from: accounts[9], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.transfer(accounts[0], accounts[4], [accounts[3], accounts[7], accounts[1]], web3.utils.toBN("99"), web3.utils.toBN("18"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
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
