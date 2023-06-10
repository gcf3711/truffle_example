const Marriage = artifacts.require("Marriage")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await Marriage.deployed()
    address = await Marriage.address
    try{
      result[1] = await instance.sendMessage("bowensanders@gmail.com", "Congratulations are in order! Millions of happy faces to you both!", "https://www.facebook.com/misterboyfriend", {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.sendMessage("Mister Boyfriend", "Hooray! Congratulations you two! All the hearts!", "https://www.facebook.com/misterboyfriend/", {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("0.001")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.sendMessage("Luker", "Two of my very favorite people in the world - I'm so happy for you! Congratulations!", "https://www.facebook.com/luker.jen.1", {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.sendMessage("Luker", "Two of my very favorite people in the world - I'm so happy for you! Congratulations!", "https://www.facebook.com/luker.jen.1", {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("0.001")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.sendMessage("Bowen", "Did you know that you can donate ETH when you sign the guestbook? :)", "https://facebook.com/misterboyfriend", {from: accounts[0], value: web3.utils.toWei("0.001")})
    console.log("8")
    console.log(result[8])
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
