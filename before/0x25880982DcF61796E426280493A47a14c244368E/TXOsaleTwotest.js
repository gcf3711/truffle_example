const TXOsaleTwo = artifacts.require("TXOsaleTwo")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await TXOsaleTwo.deployed()
    address = await TXOsaleTwo.address
    try{
      result[1] = await web3.eth.sendTransaction({to: address, from: accounts[3], value: web3.utils.toWei("0.015")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await web3.eth.sendTransaction({to: address, from: accounts[8], value: web3.utils.toWei("0.14593033")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await web3.eth.sendTransaction({to: address, from: accounts[1], value: web3.utils.toWei("0.2")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await web3.eth.sendTransaction({to: address, from: accounts[2], value: web3.utils.toWei("0.1")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await web3.eth.sendTransaction({to: address, from: accounts[5], value: web3.utils.toWei("0.0013")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await web3.eth.sendTransaction({to: address, from: accounts[11], value: web3.utils.toWei("0.1")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await web3.eth.sendTransaction({to: address, from: accounts[10], value: web3.utils.toWei("0.395997794434844152")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await web3.eth.sendTransaction({to: address, from: accounts[4], value: web3.utils.toWei("0.3")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await web3.eth.sendTransaction({to: address, from: accounts[4], value: web3.utils.toWei("1")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await web3.eth.sendTransaction({to: address, from: accounts[6], value: web3.utils.toWei("1")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await web3.eth.sendTransaction({to: address, from: accounts[7], value: web3.utils.toWei("1")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await web3.eth.sendTransaction({to: address, from: accounts[7], value: web3.utils.toWei("1.917916275")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await web3.eth.sendTransaction({to: address, from: accounts[9], value: web3.utils.toWei("0.12937664")})
    console.log("13")
    console.log(result[13])
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
