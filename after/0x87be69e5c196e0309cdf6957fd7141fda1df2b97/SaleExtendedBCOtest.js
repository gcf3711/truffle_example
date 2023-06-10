const SaleExtendedBCO = artifacts.require("SaleExtendedBCO")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await SaleExtendedBCO.deployed()
    address = await SaleExtendedBCO.address
    try{
      result[1] = await web3.eth.sendTransaction({to: address, from: accounts[30], value: web3.utils.toWei("0.1")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await web3.eth.sendTransaction({to: address, from: accounts[31], value: web3.utils.toWei("2")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await web3.eth.sendTransaction({to: address, from: accounts[35], value: web3.utils.toWei("0.0779")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await web3.eth.sendTransaction({to: address, from: accounts[44], value: web3.utils.toWei("0.05")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await web3.eth.sendTransaction({to: address, from: accounts[44], value: web3.utils.toWei("0.25")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await web3.eth.sendTransaction({to: address, from: accounts[28], value: web3.utils.toWei("0.0001")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await web3.eth.sendTransaction({to: address, from: accounts[28], value: web3.utils.toWei("0.0001")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await web3.eth.sendTransaction({to: address, from: accounts[24], value: web3.utils.toWei("0.2")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await web3.eth.sendTransaction({to: address, from: accounts[9], value: web3.utils.toWei("0.07")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await web3.eth.sendTransaction({to: address, from: accounts[43], value: web3.utils.toWei("0.5")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await web3.eth.sendTransaction({to: address, from: accounts[37], value: web3.utils.toWei("0.4")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await web3.eth.sendTransaction({to: address, from: accounts[41], value: web3.utils.toWei("0.01")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await web3.eth.sendTransaction({to: address, from: accounts[54], value: web3.utils.toWei("6.9")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await web3.eth.sendTransaction({to: address, from: accounts[22], value: web3.utils.toWei("0.345")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await web3.eth.sendTransaction({to: address, from: accounts[5], value: web3.utils.toWei("0.090536157")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await web3.eth.sendTransaction({to: address, from: accounts[70], value: web3.utils.toWei("0.433")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await web3.eth.sendTransaction({to: address, from: accounts[51], value: web3.utils.toWei("50")})
    console.log("17")
    console.log(result[17])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[18] = await web3.eth.sendTransaction({to: address, from: accounts[70], value: web3.utils.toWei("0.345")})
    console.log("18")
    console.log(result[18])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[19] = await instance.Refund({from: accounts[70], value: web3.utils.toWei("0")})
    console.log("19")
    console.log(result[19])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[20] = await web3.eth.sendTransaction({to: address, from: accounts[48], value: web3.utils.toWei("5")})
    console.log("20")
    console.log(result[20])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[21] = await web3.eth.sendTransaction({to: address, from: accounts[6], value: web3.utils.toWei("0.155")})
    console.log("21")
    console.log(result[21])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[22] = await web3.eth.sendTransaction({to: address, from: accounts[67], value: web3.utils.toWei("1")})
    console.log("22")
    console.log(result[22])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[23] = await web3.eth.sendTransaction({to: address, from: accounts[14], value: web3.utils.toWei("0.1")})
    console.log("23")
    console.log(result[23])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[24] = await web3.eth.sendTransaction({to: address, from: accounts[61], value: web3.utils.toWei("1")})
    console.log("24")
    console.log(result[24])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[25] = await web3.eth.sendTransaction({to: address, from: accounts[11], value: web3.utils.toWei("0.027")})
    console.log("25")
    console.log(result[25])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[26] = await web3.eth.sendTransaction({to: address, from: accounts[11], value: web3.utils.toWei("0.028")})
    console.log("26")
    console.log(result[26])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[27] = await web3.eth.sendTransaction({to: address, from: accounts[11], value: web3.utils.toWei("0.02")})
    console.log("27")
    console.log(result[27])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[28] = await web3.eth.sendTransaction({to: address, from: accounts[11], value: web3.utils.toWei("0.025")})
    console.log("28")
    console.log(result[28])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[29] = await web3.eth.sendTransaction({to: address, from: accounts[7], value: web3.utils.toWei("1")})
    console.log("29")
    console.log(result[29])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[30] = await web3.eth.sendTransaction({to: address, from: accounts[38], value: web3.utils.toWei("2")})
    console.log("30")
    console.log(result[30])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[31] = await web3.eth.sendTransaction({to: address, from: accounts[49], value: web3.utils.toWei("0.083")})
    console.log("31")
    console.log(result[31])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[32] = await web3.eth.sendTransaction({to: address, from: accounts[32], value: web3.utils.toWei("0.821732141")})
    console.log("32")
    console.log(result[32])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[33] = await web3.eth.sendTransaction({to: address, from: accounts[55], value: web3.utils.toWei("1.15")})
    console.log("33")
    console.log(result[33])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[34] = await web3.eth.sendTransaction({to: address, from: accounts[49], value: web3.utils.toWei("0.14")})
    console.log("34")
    console.log(result[34])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[35] = await web3.eth.sendTransaction({to: address, from: accounts[57], value: web3.utils.toWei("25.59")})
    console.log("35")
    console.log(result[35])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[36] = await web3.eth.sendTransaction({to: address, from: accounts[19], value: web3.utils.toWei("0.166")})
    console.log("36")
    console.log(result[36])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[37] = await web3.eth.sendTransaction({to: address, from: accounts[71], value: web3.utils.toWei("1.3")})
    console.log("37")
    console.log(result[37])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[38] = await web3.eth.sendTransaction({to: address, from: accounts[59], value: web3.utils.toWei("0.176760137")})
    console.log("38")
    console.log(result[38])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[39] = await web3.eth.sendTransaction({to: address, from: accounts[53], value: web3.utils.toWei("0.11738")})
    console.log("39")
    console.log(result[39])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[40] = await web3.eth.sendTransaction({to: address, from: accounts[16], value: web3.utils.toWei("0.203")})
    console.log("40")
    console.log(result[40])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[41] = await web3.eth.sendTransaction({to: address, from: accounts[2], value: web3.utils.toWei("1")})
    console.log("41")
    console.log(result[41])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[42] = await web3.eth.sendTransaction({to: address, from: accounts[46], value: web3.utils.toWei("0.1")})
    console.log("42")
    console.log(result[42])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[43] = await web3.eth.sendTransaction({to: address, from: accounts[25], value: web3.utils.toWei("0.1")})
    console.log("43")
    console.log(result[43])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[44] = await web3.eth.sendTransaction({to: address, from: accounts[58], value: web3.utils.toWei("0.28")})
    console.log("44")
    console.log(result[44])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[45] = await web3.eth.sendTransaction({to: address, from: accounts[18], value: web3.utils.toWei("0.143380799434096")})
    console.log("45")
    console.log(result[45])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[46] = await web3.eth.sendTransaction({to: address, from: accounts[53], value: web3.utils.toWei("0.124152723321552152")})
    console.log("46")
    console.log(result[46])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[47] = await web3.eth.sendTransaction({to: address, from: accounts[23], value: web3.utils.toWei("1.68")})
    console.log("47")
    console.log(result[47])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[48] = await web3.eth.sendTransaction({to: address, from: accounts[55], value: web3.utils.toWei("0.7")})
    console.log("48")
    console.log(result[48])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[49] = await web3.eth.sendTransaction({to: address, from: accounts[52], value: web3.utils.toWei("0.09")})
    console.log("49")
    console.log(result[49])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[50] = await web3.eth.sendTransaction({to: address, from: accounts[47], value: web3.utils.toWei("0.002")})
    console.log("50")
    console.log(result[50])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[51] = await web3.eth.sendTransaction({to: address, from: accounts[47], value: web3.utils.toWei("0.09")})
    console.log("51")
    console.log(result[51])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[52] = await web3.eth.sendTransaction({to: address, from: accounts[66], value: web3.utils.toWei("0.1")})
    console.log("52")
    console.log(result[52])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[53] = await web3.eth.sendTransaction({to: address, from: accounts[8], value: web3.utils.toWei("0.007")})
    console.log("53")
    console.log(result[53])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[54] = await instance.WithdrawTokens(web3.utils.toBN("12835575050864"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("54")
    console.log(result[54])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[55] = await web3.eth.sendTransaction({to: address, from: accounts[62], value: web3.utils.toWei("0.042")})
    console.log("55")
    console.log(result[55])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[56] = await web3.eth.sendTransaction({to: address, from: accounts[4], value: web3.utils.toWei("0.385")})
    console.log("56")
    console.log(result[56])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[57] = await web3.eth.sendTransaction({to: address, from: accounts[33], value: web3.utils.toWei("0.56888")})
    console.log("57")
    console.log(result[57])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[58] = await web3.eth.sendTransaction({to: address, from: accounts[17], value: web3.utils.toWei("0.02")})
    console.log("58")
    console.log(result[58])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[59] = await web3.eth.sendTransaction({to: address, from: accounts[64], value: web3.utils.toWei("2")})
    console.log("59")
    console.log(result[59])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[60] = await web3.eth.sendTransaction({to: address, from: accounts[56], value: web3.utils.toWei("0.0179024")})
    console.log("60")
    console.log(result[60])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[61] = await instance.WithdrawTokens(web3.utils.toBN("86800000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("61")
    console.log(result[61])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[62] = await web3.eth.sendTransaction({to: address, from: accounts[45], value: web3.utils.toWei("0.01")})
    console.log("62")
    console.log(result[62])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[63] = await web3.eth.sendTransaction({to: address, from: accounts[26], value: web3.utils.toWei("0.04515427714004593")})
    console.log("63")
    console.log(result[63])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[64] = await web3.eth.sendTransaction({to: address, from: accounts[1], value: web3.utils.toWei("0.138")})
    console.log("64")
    console.log(result[64])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[65] = await web3.eth.sendTransaction({to: address, from: accounts[25], value: web3.utils.toWei("0.001")})
    console.log("65")
    console.log(result[65])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[66] = await instance.WithdrawTokens(web3.utils.toBN("2800000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("66")
    console.log(result[66])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[67] = await web3.eth.sendTransaction({to: address, from: accounts[39], value: web3.utils.toWei("0.18")})
    console.log("67")
    console.log(result[67])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[68] = await web3.eth.sendTransaction({to: address, from: accounts[68], value: web3.utils.toWei("0.9")})
    console.log("68")
    console.log(result[68])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[69] = await web3.eth.sendTransaction({to: address, from: accounts[63], value: web3.utils.toWei("0.1")})
    console.log("69")
    console.log(result[69])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[70] = await instance.WithdrawTokens(web3.utils.toBN("655323965843"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("70")
    console.log(result[70])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[71] = await web3.eth.sendTransaction({to: address, from: accounts[27], value: web3.utils.toWei("0.1")})
    console.log("71")
    console.log(result[71])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[72] = await instance.WithdrawTokens(web3.utils.toBN("5000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("72")
    console.log(result[72])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[73] = await instance.WithdrawTokens(web3.utils.toBN("8400000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("73")
    console.log(result[73])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[74] = await web3.eth.sendTransaction({to: address, from: accounts[69], value: web3.utils.toWei("0.1")})
    console.log("74")
    console.log(result[74])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[75] = await web3.eth.sendTransaction({to: address, from: accounts[65], value: web3.utils.toWei("0.03")})
    console.log("75")
    console.log(result[75])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[76] = await instance.ChangeCost(web3.utils.toBN("11363636"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("76")
    console.log(result[76])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[77] = await web3.eth.sendTransaction({to: address, from: accounts[15], value: web3.utils.toWei("1.2")})
    console.log("77")
    console.log(result[77])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[78] = await instance.WithdrawTokens(web3.utils.toBN("860561616400"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("78")
    console.log(result[78])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[79] = await web3.eth.sendTransaction({to: address, from: accounts[11], value: web3.utils.toWei("0.074")})
    console.log("79")
    console.log(result[79])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[80] = await web3.eth.sendTransaction({to: address, from: accounts[10], value: web3.utils.toWei("0.05")})
    console.log("80")
    console.log(result[80])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[81] = await web3.eth.sendTransaction({to: address, from: accounts[12], value: web3.utils.toWei("0.518")})
    console.log("81")
    console.log(result[81])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[82] = await web3.eth.sendTransaction({to: address, from: accounts[13], value: web3.utils.toWei("0.4")})
    console.log("82")
    console.log(result[82])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[83] = await web3.eth.sendTransaction({to: address, from: accounts[50], value: web3.utils.toWei("0.2")})
    console.log("83")
    console.log(result[83])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[84] = await instance.ChangeEnd(web3.utils.toBN("1505725200"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("84")
    console.log(result[84])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[85] = await instance.ChangeEnd(web3.utils.toBN("1505898000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("85")
    console.log(result[85])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[86] = await web3.eth.sendTransaction({to: address, from: accounts[13], value: web3.utils.toWei("0.725")})
    console.log("86")
    console.log(result[86])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[87] = await instance.WithdrawTokens(web3.utils.toBN("1600000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("87")
    console.log(result[87])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[88] = await web3.eth.sendTransaction({to: address, from: accounts[50], value: web3.utils.toWei("1.8")})
    console.log("88")
    console.log(result[88])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[89] = await web3.eth.sendTransaction({to: address, from: accounts[65], value: web3.utils.toWei("0.006")})
    console.log("89")
    console.log(result[89])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[90] = await web3.eth.sendTransaction({to: address, from: accounts[13], value: web3.utils.toWei("0.07")})
    console.log("90")
    console.log(result[90])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[91] = await web3.eth.sendTransaction({to: address, from: accounts[63], value: web3.utils.toWei("0.03")})
    console.log("91")
    console.log(result[91])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[92] = await instance.WithdrawTokens(web3.utils.toBN("10400000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("92")
    console.log(result[92])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[93] = await web3.eth.sendTransaction({to: address, from: accounts[21], value: web3.utils.toWei("0.399559")})
    console.log("93")
    console.log(result[93])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[94] = await web3.eth.sendTransaction({to: address, from: accounts[60], value: web3.utils.toWei("12")})
    console.log("94")
    console.log(result[94])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[95] = await web3.eth.sendTransaction({to: address, from: accounts[21], value: web3.utils.toWei("0.397459")})
    console.log("95")
    console.log(result[95])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[96] = await web3.eth.sendTransaction({to: address, from: accounts[60], value: web3.utils.toWei("60.88")})
    console.log("96")
    console.log(result[96])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[97] = await web3.eth.sendTransaction({to: address, from: accounts[34], value: web3.utils.toWei("1.7")})
    console.log("97")
    console.log(result[97])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[98] = await web3.eth.sendTransaction({to: address, from: accounts[29], value: web3.utils.toWei("0.55")})
    console.log("98")
    console.log(result[98])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[99] = await web3.eth.sendTransaction({to: address, from: accounts[33], value: web3.utils.toWei("0.288")})
    console.log("99")
    console.log(result[99])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[100] = await web3.eth.sendTransaction({to: address, from: accounts[3], value: web3.utils.toWei("3")})
    console.log("100")
    console.log(result[100])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[101] = await web3.eth.sendTransaction({to: address, from: accounts[21], value: web3.utils.toWei("0.153336968")})
    console.log("101")
    console.log(result[101])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[102] = await web3.eth.sendTransaction({to: address, from: accounts[20], value: web3.utils.toWei("2.99")})
    console.log("102")
    console.log(result[102])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[103] = await instance.WithdrawAllETH({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("103")
    console.log(result[103])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[104] = await instance.WithdrawTokens(web3.utils.toBN("9510000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("104")
    console.log(result[104])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[105] = await instance.WithdrawTokens(web3.utils.toBN("65600000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("105")
    console.log(result[105])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[106] = await instance.WithdrawTokens(web3.utils.toBN("56981257"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("106")
    console.log(result[106])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[107] = await web3.eth.sendTransaction({to: address, from: accounts[36], value: web3.utils.toWei("0.0234")})
    console.log("107")
    console.log(result[107])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[108] = await web3.eth.sendTransaction({to: address, from: accounts[36], value: web3.utils.toWei("0.022959")})
    console.log("108")
    console.log(result[108])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[109] = await web3.eth.sendTransaction({to: address, from: accounts[36], value: web3.utils.toWei("0.022518")})
    console.log("109")
    console.log(result[109])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[110] = await web3.eth.sendTransaction({to: address, from: accounts[36], value: web3.utils.toWei("0.020418")})
    console.log("110")
    console.log(result[110])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[111] = await web3.eth.sendTransaction({to: address, from: accounts[42], value: web3.utils.toWei("0.283")})
    console.log("111")
    console.log(result[111])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[112] = await web3.eth.sendTransaction({to: address, from: accounts[42], value: web3.utils.toWei("0.28")})
    console.log("112")
    console.log(result[112])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[113] = await web3.eth.sendTransaction({to: address, from: accounts[42], value: web3.utils.toWei("0.28")})
    console.log("113")
    console.log(result[113])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[114] = await web3.eth.sendTransaction({to: address, from: accounts[42], value: web3.utils.toWei("0.27")})
    console.log("114")
    console.log(result[114])
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
