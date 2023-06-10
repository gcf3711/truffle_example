const DestiNeedToken = artifacts.require("DestiNeedToken")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await DestiNeedToken.deployed()
    address = await DestiNeedToken.address
    try{
      result[1] = await instance.transferOwnership(accounts[4], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.transfer(accounts[4], web3.utils.toBN("950000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.transfer(accounts[1], web3.utils.toBN("940000000000000000000000000"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await web3.eth.sendTransaction({to: address, from: accounts[3], value: web3.utils.toWei("0.01")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await web3.eth.sendTransaction({to: address, from: accounts[3], value: web3.utils.toWei("0.001")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await web3.eth.sendTransaction({to: address, from: accounts[3], value: web3.utils.toWei("0.002")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await web3.eth.sendTransaction({to: address, from: accounts[3], value: web3.utils.toWei("0.002")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await web3.eth.sendTransaction({to: address, from: accounts[3], value: web3.utils.toWei("0.00004")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await web3.eth.sendTransaction({to: address, from: accounts[3], value: web3.utils.toWei("0.0004")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.transfer(accounts[2], web3.utils.toBN("900000000000000000000000000"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
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
