const FreeCoin = artifacts.require("FreeCoin")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await FreeCoin.deployed()
    address = await FreeCoin.address
    try{
      result[1] = await instance.transfer(accounts[6], web3.utils.toBN("10000000000000000000"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.transfer(accounts[12], web3.utils.toBN("10000000000000000000"), {from: accounts[10], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.transfer(accounts[10], web3.utils.toBN("10000000000000000000"), {from: accounts[12], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.transfer(accounts[8], web3.utils.toBN("10000000000000000000"), {from: accounts[10], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.transfer(accounts[8], web3.utils.toBN("20000000000000000000"), {from: accounts[10], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.transfer(accounts[11], web3.utils.toBN("100000000000000000000"), {from: accounts[7], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.transfer(accounts[11], web3.utils.toBN("100000000000000000000"), {from: accounts[5], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.transfer(accounts[11], web3.utils.toBN("100000000000000000000"), {from: accounts[5], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.transfer(accounts[2], web3.utils.toBN("100000000000000000000"), {from: accounts[9], value: web3.utils.toWei("0")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.transfer(accounts[1], web3.utils.toBN("100000000000000000000"), {from: accounts[3], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await instance.transfer(accounts[1], web3.utils.toBN("100000000000000000000"), {from: accounts[3], value: web3.utils.toWei("0")})
    console.log("11")
    console.log(result[11])
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
