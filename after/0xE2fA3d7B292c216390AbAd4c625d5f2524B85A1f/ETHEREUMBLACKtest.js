const ETHEREUMBLACK = artifacts.require("ETHEREUMBLACK")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await ETHEREUMBLACK.deployed()
    address = await ETHEREUMBLACK.address
    try{
      result[1] = await instance.transfer(accounts[1], web3.utils.toBN("10000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.approve(accounts[2], web3.utils.toBN("100000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.approve(accounts[2], web3.utils.toBN("1000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.transfer(accounts[1], web3.utils.toBN("10000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
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
