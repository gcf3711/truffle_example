const YobCoinCrowdsale = artifacts.require("YobCoinCrowdsale")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await YobCoinCrowdsale.deployed()
    address = await YobCoinCrowdsale.address
    try{
      result[1] = await instance.changeTokenContract(accounts[8], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.extraMint(web3.utils.toBN("10000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.changeTokenContract(accounts[4], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.changeTokenContract(accounts[8], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.changeWalletAddress(accounts[4], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.extraMint(web3.utils.toBN("1000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await web3.eth.sendTransaction({to: address, from: accounts[1], value: web3.utils.toWei("1")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await web3.eth.sendTransaction({to: address, from: accounts[6], value: web3.utils.toWei("0.1")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await web3.eth.sendTransaction({to: address, from: accounts[5], value: web3.utils.toWei("0.1195")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await web3.eth.sendTransaction({to: address, from: accounts[5], value: web3.utils.toWei("0.1")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await web3.eth.sendTransaction({to: address, from: accounts[5], value: web3.utils.toWei("0.1")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await web3.eth.sendTransaction({to: address, from: accounts[5], value: web3.utils.toWei("1")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await web3.eth.sendTransaction({to: address, from: accounts[10], value: web3.utils.toWei("1")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await instance.extraMint(web3.utils.toBN("40000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await web3.eth.sendTransaction({to: address, from: accounts[14], value: web3.utils.toWei("0.105436295390325166")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await web3.eth.sendTransaction({to: address, from: accounts[14], value: web3.utils.toWei("2.108725907806503311")})
    console.log("17")
    console.log(result[17])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[18] = await web3.eth.sendTransaction({to: address, from: accounts[2], value: web3.utils.toWei("1")})
    console.log("18")
    console.log(result[18])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[19] = await web3.eth.sendTransaction({to: address, from: accounts[15], value: web3.utils.toWei("0.45")})
    console.log("19")
    console.log(result[19])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[20] = await web3.eth.sendTransaction({to: address, from: accounts[15], value: web3.utils.toWei("0.1")})
    console.log("20")
    console.log(result[20])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[21] = await web3.eth.sendTransaction({to: address, from: accounts[15], value: web3.utils.toWei("0.01")})
    console.log("21")
    console.log(result[21])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[22] = await web3.eth.sendTransaction({to: address, from: accounts[16], value: web3.utils.toWei("0.05")})
    console.log("22")
    console.log(result[22])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[23] = await web3.eth.sendTransaction({to: address, from: accounts[11], value: web3.utils.toWei("1.3501")})
    console.log("23")
    console.log(result[23])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[24] = await web3.eth.sendTransaction({to: address, from: accounts[11], value: web3.utils.toWei("1.35")})
    console.log("24")
    console.log(result[24])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[25] = await web3.eth.sendTransaction({to: address, from: accounts[11], value: web3.utils.toWei("1.35")})
    console.log("25")
    console.log(result[25])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[26] = await web3.eth.sendTransaction({to: address, from: accounts[11], value: web3.utils.toWei("1.352")})
    console.log("26")
    console.log(result[26])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[27] = await web3.eth.sendTransaction({to: address, from: accounts[9], value: web3.utils.toWei("0.14")})
    console.log("27")
    console.log(result[27])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[28] = await web3.eth.sendTransaction({to: address, from: accounts[13], value: web3.utils.toWei("1.998887")})
    console.log("28")
    console.log(result[28])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[29] = await web3.eth.sendTransaction({to: address, from: accounts[12], value: web3.utils.toWei("0.024")})
    console.log("29")
    console.log(result[29])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[30] = await web3.eth.sendTransaction({to: address, from: accounts[12], value: web3.utils.toWei("0.024")})
    console.log("30")
    console.log(result[30])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[31] = await web3.eth.sendTransaction({to: address, from: accounts[12], value: web3.utils.toWei("0.024")})
    console.log("31")
    console.log(result[31])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[32] = await web3.eth.sendTransaction({to: address, from: accounts[12], value: web3.utils.toWei("0.024")})
    console.log("32")
    console.log(result[32])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[33] = await web3.eth.sendTransaction({to: address, from: accounts[12], value: web3.utils.toWei("0.024")})
    console.log("33")
    console.log(result[33])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[34] = await web3.eth.sendTransaction({to: address, from: accounts[3], value: web3.utils.toWei("0.015")})
    console.log("34")
    console.log(result[34])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[35] = await web3.eth.sendTransaction({to: address, from: accounts[7], value: web3.utils.toWei("0.0155")})
    console.log("35")
    console.log(result[35])
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
