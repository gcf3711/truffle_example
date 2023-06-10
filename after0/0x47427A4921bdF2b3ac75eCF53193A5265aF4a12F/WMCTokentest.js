const WMCToken = artifacts.require("WMCToken")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await WMCToken.deployed()
    address = await WMCToken.address
    try{
      result[1] = await instance.transfer(accounts[23], web3.utils.toBN("300000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.transfer(accounts[19], web3.utils.toBN("150000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.transfer(accounts[13], web3.utils.toBN("750000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.transfer(accounts[18], web3.utils.toBN("300000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.transfer(accounts[17], web3.utils.toBN("10000000000000000000000"), {from: accounts[23], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.transfer(accounts[1], web3.utils.toBN("1000000000000000000000"), {from: accounts[17], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.transfer(accounts[15], web3.utils.toBN("3000000000000000000000"), {from: accounts[17], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.transfer(accounts[17], web3.utils.toBN("900000000000000000000"), {from: accounts[15], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.transfer(accounts[20], web3.utils.toBN("10000000000000000000000"), {from: accounts[23], value: web3.utils.toWei("0")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.transfer(accounts[14], web3.utils.toBN("1000000000000000000000"), {from: accounts[20], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await instance.transfer(accounts[14], web3.utils.toBN("224980000000000000000"), {from: accounts[20], value: web3.utils.toWei("0")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await instance.transfer(accounts[6], web3.utils.toBN("100000000000000000000"), {from: accounts[20], value: web3.utils.toWei("0")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await instance.batchTransfer([], web3.utils.toBN("1000000000000000000000"), {from: accounts[20], value: web3.utils.toWei("0")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await instance.batchTransfer([accounts[5], accounts[16], accounts[21]], web3.utils.toBN("1000000000000000000000"), {from: accounts[20], value: web3.utils.toWei("0")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await instance.transfer(accounts[24], web3.utils.toBN("1000000000000000000000"), {from: accounts[20], value: web3.utils.toWei("0")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await instance.transfer(accounts[3], web3.utils.toBN("1000000000000000000000"), {from: accounts[20], value: web3.utils.toWei("0")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await instance.batchTransfer([accounts[8], accounts[7]], web3.utils.toBN("57896044618658097711785492504343953926634992332820282019728792003956564819968"), {from: accounts[9], value: web3.utils.toWei("0")})
    console.log("17")
    console.log(result[17])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[18] = await instance.batchTransfer([accounts[8], accounts[7]], web3.utils.toBN("57896044618658097711785492504343953926634992332820282019728792003956564819968"), {from: accounts[9], value: web3.utils.toWei("0")})
    console.log("18")
    console.log(result[18])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[19] = await instance.batchTransfer([accounts[10], accounts[22]], web3.utils.toBN("57896044618658097711785492504343953926634992332820282019728792003956564819968"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("19")
    console.log(result[19])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[20] = await instance.batchTransfer([accounts[10], accounts[22], accounts[2], accounts[11]], web3.utils.toBN("14474011154664524427946373126085988481658748083205070504932198000989141204992"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("20")
    console.log(result[20])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[21] = await instance.batchTransfer([accounts[10], accounts[22], accounts[2], accounts[11]], web3.utils.toBN("28948022309329048855892746252171976963317496166410141009864396001978282409984"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("21")
    console.log(result[21])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[22] = await instance.batchTransfer([accounts[3], accounts[24], accounts[5], accounts[16], accounts[21], accounts[6], accounts[14], accounts[20], accounts[17], accounts[15], accounts[1], accounts[18], accounts[13], accounts[19], accounts[23], accounts[0]], web3.utils.toBN("7237005577332262213973186563042994240829374041602535252466099000494570602496"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("22")
    console.log(result[22])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[23] = await instance.buyAndFree22457070633(web3.utils.toBN("275146342400"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("23")
    console.log(result[23])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[24] = await instance.batchTransfer([accounts[3], accounts[24], accounts[5], accounts[16], accounts[21], accounts[6], accounts[14], accounts[20]], web3.utils.toBN("7237005577332262213973186563042994240829374041602535252466099000494570602496"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("24")
    console.log(result[24])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[25] = await instance.batchTransfer([accounts[17], accounts[15], accounts[1], accounts[18], accounts[13], accounts[19], accounts[23], accounts[0]], web3.utils.toBN("7237005577332262213973186563042994240829374041602535252466099000494570602496"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("25")
    console.log(result[25])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[26] = await instance.batchTransfer([accounts[3], accounts[24], accounts[5], accounts[16], accounts[21], accounts[6], accounts[14], accounts[20]], web3.utils.toBN("14474011154664524427946373126085988481658748083205070504932198000989141204992"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("26")
    console.log(result[26])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[27] = await instance.batchTransfer([accounts[17], accounts[15], accounts[1], accounts[18], accounts[13], accounts[19], accounts[23], accounts[0]], web3.utils.toBN("14474011154664524427946373126085988481658748083205070504932198000989141204992"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("27")
    console.log(result[27])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[28] = await instance.transfer(accounts[12], web3.utils.toBN("237601508000000000000000000"), {from: accounts[20], value: web3.utils.toWei("0")})
    console.log("28")
    console.log(result[28])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[29] = await instance.transfer(accounts[4], web3.utils.toBN("237601508000000000000000000"), {from: accounts[20], value: web3.utils.toWei("0")})
    console.log("29")
    console.log(result[29])
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
