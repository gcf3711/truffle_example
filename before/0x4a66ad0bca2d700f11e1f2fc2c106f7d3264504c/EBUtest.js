const EBU = artifacts.require("EBU")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await EBU.deployed()
    address = await EBU.address
    try{
      result[1] = await instance.transfer([accounts[2], accounts[2]], [web3.utils.toBN("0"), web3.utils.toBN("1"), web3.utils.toBN("2")], {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.transfer([accounts[2], accounts[2]], [web3.utils.toBN("0"), web3.utils.toBN("0")], {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.transfer([accounts[2], accounts[2], accounts[2]], [web3.utils.toBN("1"), web3.utils.toBN("2"), web3.utils.toBN("3")], {from: accounts[1], value: web3.utils.toWei("0")})
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
