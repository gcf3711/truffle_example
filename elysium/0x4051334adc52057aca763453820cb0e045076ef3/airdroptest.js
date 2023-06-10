const airdrop = artifacts.require("airdrop")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await airdrop.deployed()
    address = await airdrop.address
    try{
      result[1] = await instance.transfer(accounts[0], accounts[91], [accounts[66], accounts[77]], web3.utils.toBN("1230000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.transfer(accounts[89], accounts[91], [accounts[37], accounts[92]], web3.utils.toBN("1110000000000000100"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.transfer(accounts[89], accounts[91], [accounts[37], accounts[92]], web3.utils.toBN("111100000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.transfer(accounts[89], accounts[91], [accounts[27], accounts[29], accounts[12], accounts[84]], web3.utils.toBN("100000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.transfer(accounts[89], accounts[91], [accounts[27], accounts[29], accounts[12], accounts[84]], web3.utils.toBN("100000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.transfer(accounts[89], accounts[91], [accounts[51], accounts[62], accounts[1], accounts[4], accounts[6], accounts[34], accounts[24]], web3.utils.toBN("50000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.transfer(accounts[89], accounts[91], [accounts[57], accounts[31], accounts[30], accounts[87], accounts[44], accounts[70], accounts[85]], web3.utils.toBN("100000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.transfer(accounts[89], accounts[91], [accounts[36], accounts[35], accounts[19]], web3.utils.toBN("200000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.transfer(accounts[89], accounts[91], [accounts[61]], web3.utils.toBN("150000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.transfer(accounts[89], accounts[91], [accounts[43], accounts[58]], web3.utils.toBN("350000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await instance.transfer(accounts[89], accounts[91], [accounts[79], accounts[18]], web3.utils.toBN("300000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await instance.transfer(accounts[89], accounts[91], [accounts[3], accounts[74]], web3.utils.toBN("250000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await instance.transfer(accounts[89], accounts[91], [accounts[3], accounts[74]], web3.utils.toBN("250000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await instance.transfer(accounts[89], accounts[91], [accounts[26], accounts[23], accounts[52]], web3.utils.toBN("300000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await instance.transfer(accounts[89], accounts[91], [accounts[83], accounts[10]], web3.utils.toBN("200000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await instance.transfer(accounts[89], accounts[91], [accounts[71], accounts[76]], web3.utils.toBN("150000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await instance.transfer(accounts[89], accounts[91], [accounts[72], accounts[2], accounts[73], accounts[45], accounts[42], accounts[16], accounts[47], accounts[3], accounts[50], accounts[65]], web3.utils.toBN("100000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("17")
    console.log(result[17])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[18] = await instance.transfer(accounts[89], accounts[91], [accounts[72], accounts[2], accounts[73], accounts[45], accounts[42], accounts[16], accounts[47], accounts[3], accounts[50], accounts[65]], web3.utils.toBN("100000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("18")
    console.log(result[18])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[19] = await instance.transfer(accounts[89], accounts[91], [accounts[72], accounts[2], accounts[73], accounts[45], accounts[42], accounts[16], accounts[47], accounts[3], accounts[50], accounts[65]], web3.utils.toBN("100000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("19")
    console.log(result[19])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[20] = await instance.transfer(accounts[89], accounts[91], [accounts[51], accounts[69], accounts[38], accounts[55], accounts[17], accounts[32]], web3.utils.toBN("50000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("20")
    console.log(result[20])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[21] = await instance.transfer(accounts[89], accounts[91], [accounts[51], accounts[69], accounts[38], accounts[55], accounts[17], accounts[32]], web3.utils.toBN("50000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("21")
    console.log(result[21])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[22] = await instance.transfer(accounts[89], accounts[91], [accounts[51], accounts[69], accounts[38], accounts[55], accounts[17], accounts[32]], web3.utils.toBN("50000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("22")
    console.log(result[22])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[23] = await instance.transfer(accounts[89], accounts[91], [accounts[65], accounts[83], accounts[32], accounts[64], accounts[41], accounts[50]], web3.utils.toBN("50000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("23")
    console.log(result[23])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[24] = await instance.transfer(accounts[89], accounts[91], [accounts[86], accounts[2], accounts[10], accounts[46], accounts[45], accounts[56], accounts[20], accounts[23]], web3.utils.toBN("100000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("24")
    console.log(result[24])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[25] = await instance.transfer(accounts[89], accounts[91], [accounts[54], accounts[26], accounts[61]], web3.utils.toBN("150000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("25")
    console.log(result[25])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[26] = await instance.transfer(accounts[89], accounts[91], [accounts[42], accounts[38], accounts[21], accounts[5], accounts[82], accounts[33]], web3.utils.toBN("200000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("26")
    console.log(result[26])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[27] = await instance.transfer(accounts[89], accounts[91], [accounts[73], accounts[61]], web3.utils.toBN("250000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("27")
    console.log(result[27])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[28] = await instance.transfer(accounts[89], accounts[91], [accounts[15]], web3.utils.toBN("350000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("28")
    console.log(result[28])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[29] = await instance.transfer(accounts[89], accounts[91], [accounts[52]], web3.utils.toBN("450000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("29")
    console.log(result[29])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[30] = await instance.transfer(accounts[89], accounts[91], [accounts[14]], web3.utils.toBN("3000000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("30")
    console.log(result[30])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[31] = await instance.transfer(accounts[89], accounts[91], [accounts[14]], web3.utils.toBN("3000000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("31")
    console.log(result[31])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[32] = await instance.transfer(accounts[89], accounts[91], [accounts[33]], web3.utils.toBN("5000000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("32")
    console.log(result[32])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[33] = await instance.transfer(accounts[89], accounts[91], [accounts[71]], web3.utils.toBN("3000000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("33")
    console.log(result[33])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[34] = await instance.transfer(accounts[89], accounts[91], [accounts[42]], web3.utils.toBN("3000000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("34")
    console.log(result[34])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[35] = await instance.transfer(accounts[89], accounts[91], [accounts[41]], web3.utils.toBN("3000000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("35")
    console.log(result[35])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[36] = await instance.transfer(accounts[89], accounts[91], [accounts[49]], web3.utils.toBN("5000000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("36")
    console.log(result[36])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[37] = await instance.transfer(accounts[89], accounts[91], [accounts[80]], web3.utils.toBN("3000000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("37")
    console.log(result[37])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[38] = await instance.transfer(accounts[89], accounts[91], [accounts[45]], web3.utils.toBN("3000000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("38")
    console.log(result[38])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[39] = await instance.transfer(accounts[89], accounts[91], [accounts[63]], web3.utils.toBN("3000000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("39")
    console.log(result[39])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[40] = await instance.transfer(accounts[89], accounts[91], [accounts[3]], web3.utils.toBN("3000000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("40")
    console.log(result[40])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[41] = await instance.transfer(accounts[89], accounts[91], [accounts[46]], web3.utils.toBN("3000000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("41")
    console.log(result[41])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[42] = await instance.transfer(accounts[89], accounts[91], [accounts[49]], web3.utils.toBN("1200000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("42")
    console.log(result[42])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[43] = await instance.transfer(accounts[89], accounts[91], [accounts[49]], web3.utils.toBN("1200000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("43")
    console.log(result[43])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[44] = await instance.transfer(accounts[89], accounts[91], [accounts[46]], web3.utils.toBN("1800000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("44")
    console.log(result[44])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[45] = await instance.transfer(accounts[89], accounts[91], [accounts[33]], web3.utils.toBN("3000000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("45")
    console.log(result[45])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[46] = await instance.transfer(accounts[89], accounts[91], [accounts[38], accounts[28], accounts[47], accounts[88], accounts[48], accounts[92], accounts[53], accounts[61], accounts[23], accounts[46]], web3.utils.toBN("50000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("46")
    console.log(result[46])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[47] = await instance.transfer(accounts[89], accounts[91], [accounts[60], accounts[54], accounts[9], accounts[49], accounts[76], accounts[2], accounts[16], accounts[10], accounts[81]], web3.utils.toBN("100000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("47")
    console.log(result[47])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[48] = await instance.transfer(accounts[89], accounts[91], [accounts[60], accounts[54], accounts[9], accounts[49], accounts[76], accounts[2], accounts[16], accounts[10], accounts[81]], web3.utils.toBN("100000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("48")
    console.log(result[48])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[49] = await instance.transfer(accounts[89], accounts[91], [accounts[25], accounts[45]], web3.utils.toBN("150000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("49")
    console.log(result[49])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[50] = await instance.transfer(accounts[89], accounts[91], [accounts[40], accounts[83], accounts[39]], web3.utils.toBN("200000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("50")
    console.log(result[50])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[51] = await instance.transfer(accounts[89], accounts[91], [accounts[65], accounts[52]], web3.utils.toBN("250000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("51")
    console.log(result[51])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[52] = await instance.transfer(accounts[89], accounts[91], [accounts[23], accounts[10], accounts[76], accounts[13], accounts[54], accounts[28], accounts[47], accounts[21], accounts[20]], web3.utils.toBN("50000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("52")
    console.log(result[52])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[53] = await instance.transfer(accounts[89], accounts[91], [accounts[67]], web3.utils.toBN("4936999999999999737856"), {from: accounts[67], value: web3.utils.toWei("0")})
    console.log("53")
    console.log(result[53])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[54] = await instance.transfer(accounts[89], accounts[91], [accounts[67]], web3.utils.toBN("4550000000000000000000"), {from: accounts[67], value: web3.utils.toWei("0")})
    console.log("54")
    console.log(result[54])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[55] = await instance.transfer(accounts[89], accounts[91], [accounts[11], accounts[78], accounts[61], accounts[3], accounts[42], accounts[38], accounts[68], accounts[88], accounts[45]], web3.utils.toBN("100000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("55")
    console.log(result[55])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[56] = await instance.transfer(accounts[89], accounts[91], [accounts[67]], web3.utils.toBN("3500000000000000000000"), {from: accounts[67], value: web3.utils.toWei("0")})
    console.log("56")
    console.log(result[56])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[57] = await instance.transfer(accounts[89], accounts[91], [accounts[67]], web3.utils.toBN("200000000000000000000"), {from: accounts[67], value: web3.utils.toWei("0")})
    console.log("57")
    console.log(result[57])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[58] = await instance.transfer(accounts[89], accounts[91], [accounts[67]], web3.utils.toBN("4000000000000000000000"), {from: accounts[67], value: web3.utils.toWei("0")})
    console.log("58")
    console.log(result[58])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[59] = await instance.transfer(accounts[89], accounts[91], [accounts[40], accounts[41]], web3.utils.toBN("150000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("59")
    console.log(result[59])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[60] = await instance.transfer(accounts[89], accounts[91], [accounts[67]], web3.utils.toBN("3650000000000000000000"), {from: accounts[67], value: web3.utils.toWei("0")})
    console.log("60")
    console.log(result[60])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[61] = await instance.transfer(accounts[89], accounts[91], [accounts[74], accounts[22], accounts[25], accounts[60]], web3.utils.toBN("200000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("61")
    console.log(result[61])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[62] = await instance.transfer(accounts[89], accounts[91], [accounts[65]], web3.utils.toBN("250000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("62")
    console.log(result[62])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[63] = await instance.transfer(accounts[89], accounts[91], [accounts[48], accounts[39]], web3.utils.toBN("300000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("63")
    console.log(result[63])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[64] = await instance.transfer(accounts[89], accounts[91], [accounts[67]], web3.utils.toBN("900000000000000000000"), {from: accounts[67], value: web3.utils.toWei("0")})
    console.log("64")
    console.log(result[64])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[65] = await instance.transfer(accounts[89], accounts[91], [accounts[67]], web3.utils.toBN("700000000000000000000"), {from: accounts[67], value: web3.utils.toWei("0")})
    console.log("65")
    console.log(result[65])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[66] = await instance.transfer(accounts[89], accounts[91], [accounts[64]], web3.utils.toBN("350000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("66")
    console.log(result[66])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[67] = await instance.transfer(accounts[89], accounts[7], [accounts[7]], web3.utils.toBN("10000000000000000000"), {from: accounts[8], value: web3.utils.toWei("0")})
    console.log("67")
    console.log(result[67])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[68] = await instance.transfer(accounts[89], accounts[91], [accounts[48], accounts[21], accounts[45], accounts[82], accounts[52], accounts[62], accounts[75], accounts[9], accounts[25], accounts[83], accounts[76]], web3.utils.toBN("50000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("68")
    console.log(result[68])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[69] = await instance.transfer(accounts[89], accounts[91], [accounts[67]], web3.utils.toBN("47650000000000003670016"), {from: accounts[59], value: web3.utils.toWei("0")})
    console.log("69")
    console.log(result[69])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[70] = await instance.transfer(accounts[89], accounts[91], [accounts[90], accounts[20], accounts[22], accounts[26], accounts[51], accounts[40], accounts[55], accounts[65], accounts[13]], web3.utils.toBN("100000000000000000000"), {from: accounts[89], value: web3.utils.toWei("0")})
    console.log("70")
    console.log(result[70])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[71] = await instance.transfer(accounts[89], accounts[91], [accounts[67]], web3.utils.toBN("40750000000000000524288"), {from: accounts[67], value: web3.utils.toWei("0")})
    console.log("71")
    console.log(result[71])
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
