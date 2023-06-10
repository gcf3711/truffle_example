const EBU = artifacts.require("EBU")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await EBU.deployed()
    address = await EBU.address
    try{
      result[1] = await instance.transfer(accounts[0], accounts[5], [accounts[0], accounts[3]], [web3.utils.toBN("300"), web3.utils.toBN("876")], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.transfer(accounts[0], accounts[5], [accounts[0], accounts[3]], [web3.utils.toBN("300"), web3.utils.toBN("876")], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.transfer(accounts[0], accounts[5], [accounts[0], accounts[3]], [web3.utils.toBN("1"), web3.utils.toBN("2")], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.transfer(accounts[0], accounts[5], [accounts[0], accounts[3]], [web3.utils.toBN("300"), web3.utils.toBN("876")], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.transfer(accounts[0], accounts[1], [accounts[4], accounts[3]], [web3.utils.toBN("1"), web3.utils.toBN("2")], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.transfer(accounts[0], accounts[1], [accounts[4], accounts[3], accounts[6], accounts[6]], [web3.utils.toBN("0"), web3.utils.toBN("0"), web3.utils.toBN("0"), web3.utils.toBN("0")], {from: accounts[2], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.transfer(accounts[0], accounts[1], [accounts[4], accounts[3], accounts[6], accounts[6]], [web3.utils.toBN("1"), web3.utils.toBN("2"), web3.utils.toBN("3"), web3.utils.toBN("4")], {from: accounts[2], value: web3.utils.toWei("0")})
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
