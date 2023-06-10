const NGToken = artifacts.require("NGToken")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await NGToken.deployed()
    address = await NGToken.address
    try{
      result[1] = await instance.transfer(accounts[101], web3.utils.toBN("10000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.transfer(accounts[125], web3.utils.toBN("160000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.transfer(accounts[101], web3.utils.toBN("1000000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.transfer(accounts[130], web3.utils.toBN("500000000000000000000000000"), {from: accounts[101], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.transfer(accounts[155], web3.utils.toBN("28571429000000000000000000"), {from: accounts[130], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.transfer(accounts[166], web3.utils.toBN("114285714000000000000000000"), {from: accounts[130], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.transfer(accounts[249], web3.utils.toBN("28571429000000000000000000"), {from: accounts[130], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.transfer(accounts[251], web3.utils.toBN("142857143000000000000000000"), {from: accounts[130], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.transfer(accounts[419], web3.utils.toBN("10000000000000000000000"), {from: accounts[101], value: web3.utils.toWei("0")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.transfer(accounts[401], web3.utils.toBN("86000000000000000000000000"), {from: accounts[130], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await instance.transfer(accounts[86], web3.utils.toBN("30000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await instance.transfer(accounts[389], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await instance.transfer(accounts[151], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await instance.transfer(accounts[196], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await instance.transfer(accounts[306], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await instance.transfer(accounts[131], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await instance.transfer(accounts[218], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("17")
    console.log(result[17])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[18] = await instance.transfer(accounts[414], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("18")
    console.log(result[18])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[19] = await instance.transfer(accounts[385], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("19")
    console.log(result[19])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[20] = await instance.transfer(accounts[149], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("20")
    console.log(result[20])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[21] = await instance.transfer(accounts[330], web3.utils.toBN("1100000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("21")
    console.log(result[21])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[22] = await instance.transfer(accounts[257], web3.utils.toBN("1100000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("22")
    console.log(result[22])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[23] = await instance.transfer(accounts[4], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("23")
    console.log(result[23])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[24] = await instance.transfer(accounts[78], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("24")
    console.log(result[24])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[25] = await instance.transfer(accounts[169], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("25")
    console.log(result[25])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[26] = await instance.transfer(accounts[60], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("26")
    console.log(result[26])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[27] = await instance.transfer(accounts[60], web3.utils.toBN("1000000000000000000000"), {from: accounts[86], value: web3.utils.toWei("0")})
    console.log("27")
    console.log(result[27])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[28] = await instance.transfer(accounts[113], web3.utils.toBN("400000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("28")
    console.log(result[28])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[29] = await instance.transfer(accounts[154], web3.utils.toBN("400000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("29")
    console.log(result[29])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[30] = await instance.transfer(accounts[141], web3.utils.toBN("400000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("30")
    console.log(result[30])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[31] = await instance.transfer(accounts[144], web3.utils.toBN("400000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("31")
    console.log(result[31])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[32] = await instance.transfer(accounts[101], web3.utils.toBN("400000000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("32")
    console.log(result[32])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[33] = await instance.transfer(accounts[331], web3.utils.toBN("100000000000000000000"), {from: accounts[330], value: web3.utils.toWei("0")})
    console.log("33")
    console.log(result[33])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[34] = await instance.transfer(accounts[301], web3.utils.toBN("60000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("34")
    console.log(result[34])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[35] = await instance.transfer(accounts[301], web3.utils.toBN("60000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("35")
    console.log(result[35])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[36] = await instance.transfer(accounts[301], web3.utils.toBN("16839900000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("36")
    console.log(result[36])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[37] = await instance.transfer(accounts[153], web3.utils.toBN("500000000000000000000000000"), {from: accounts[301], value: web3.utils.toWei("0")})
    console.log("37")
    console.log(result[37])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[38] = await instance.transfer(accounts[197], web3.utils.toBN("500000000000000000000000000"), {from: accounts[301], value: web3.utils.toWei("0")})
    console.log("38")
    console.log(result[38])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[39] = await instance.transfer(accounts[14], web3.utils.toBN("500000000000000000000000000"), {from: accounts[301], value: web3.utils.toWei("0")})
    console.log("39")
    console.log(result[39])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[40] = await instance.transfer(accounts[399], web3.utils.toBN("500000000000000000000000000"), {from: accounts[301], value: web3.utils.toWei("0")})
    console.log("40")
    console.log(result[40])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[41] = await instance.transfer(accounts[217], web3.utils.toBN("200000000000000000000000"), {from: accounts[301], value: web3.utils.toWei("0")})
    console.log("41")
    console.log(result[41])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[42] = await instance.batchTransfer([accounts[53], accounts[398], accounts[157], accounts[226], accounts[12], accounts[100], accounts[198], accounts[317], accounts[55], accounts[393], accounts[123], accounts[288], accounts[27], accounts[97], accounts[416], accounts[42], accounts[81], accounts[314], accounts[243], accounts[273], accounts[174], accounts[146], accounts[396], accounts[221], accounts[111], accounts[34], accounts[205], accounts[33], accounts[83], accounts[321], accounts[241], accounts[94], accounts[37], accounts[7], accounts[348], accounts[313], accounts[341], accounts[345], accounts[45], accounts[410], accounts[305], accounts[302], accounts[403], accounts[281], accounts[228], accounts[423], accounts[167], accounts[134], accounts[392], accounts[187], accounts[362], accounts[70], accounts[72], accounts[24], accounts[213], accounts[328], accounts[415], accounts[259], accounts[285], accounts[121], accounts[335], accounts[105], accounts[240], accounts[23], accounts[168], accounts[127], accounts[336], accounts[371], accounts[84], accounts[235], accounts[38], accounts[143], accounts[324], accounts[247], accounts[369], accounts[291], accounts[372], accounts[272], accounts[320], accounts[126], accounts[17], accounts[263], accounts[19], accounts[135], accounts[40], accounts[329], accounts[370], accounts[62], accounts[382], accounts[360], accounts[351], accounts[96], accounts[236], accounts[298], accounts[74], accounts[179], accounts[266], accounts[61], accounts[277], accounts[361], accounts[286], accounts[256], accounts[64], accounts[41], accounts[171], accounts[237], accounts[395], accounts[268], accounts[284], accounts[383], accounts[5], accounts[387], accounts[68], accounts[77], accounts[297], accounts[296], accounts[215], accounts[405], accounts[322], accounts[98]], [web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000")], {from: accounts[217], value: web3.utils.toWei("0")})
    console.log("42")
    console.log(result[42])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[43] = await instance.batchTransfer([accounts[347], accounts[87], accounts[224], accounts[201], accounts[321], accounts[147], accounts[372], accounts[316], accounts[241], accounts[186], accounts[355], accounts[416], accounts[140], accounts[418], accounts[247], accounts[288], accounts[198], accounts[33], accounts[314], accounts[352], accounts[135], accounts[12], accounts[409], accounts[366], accounts[61], accounts[329], accounts[85], accounts[381], accounts[1], accounts[381], accounts[366], accounts[205], accounts[224], accounts[381], accounts[333], accounts[116], accounts[272], accounts[288], accounts[81], accounts[314], accounts[409], accounts[12], accounts[105], accounts[85], accounts[315], accounts[382], accounts[324], accounts[186], accounts[239], accounts[383], accounts[355], accounts[1], accounts[370], accounts[61], accounts[279], accounts[245], accounts[79], accounts[370], accounts[34], accounts[174], accounts[347], accounts[288], accounts[317], accounts[198], accounts[224], accounts[314], accounts[83], accounts[398], accounts[416], accounts[81], accounts[240], accounts[26], accounts[315], accounts[119], accounts[381], accounts[375], accounts[313], accounts[302], accounts[61], accounts[214], accounts[276], accounts[40], accounts[285], accounts[266], accounts[126], accounts[352], accounts[272], accounts[348], accounts[355], accounts[167], accounts[198], accounts[416], accounts[100], accounts[34], accounts[314], accounts[347], accounts[272], accounts[105], accounts[90], accounts[161], accounts[76], accounts[238], accounts[28], accounts[291], accounts[282], accounts[286], accounts[324], accounts[57], accounts[392], accounts[40], accounts[61], accounts[352], accounts[214], accounts[314], accounts[135], accounts[12], accounts[324], accounts[205], accounts[366], accounts[138], accounts[317], accounts[83], accounts[205]], [web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("1000000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("100000000000000000000"), web3.utils.toBN("3100000000000000000000"), web3.utils.toBN("20000000000000000000000"), web3.utils.toBN("500000000000000000000")], {from: accounts[217], value: web3.utils.toWei("0")})
    console.log("43")
    console.log(result[43])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[44] = await instance.transfer(accounts[47], web3.utils.toBN("1000000000000000000000"), {from: accounts[196], value: web3.utils.toWei("0")})
    console.log("44")
    console.log(result[44])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[45] = await instance.transfer(accounts[417], web3.utils.toBN("160000000000000000000000000"), {from: accounts[125], value: web3.utils.toWei("0")})
    console.log("45")
    console.log(result[45])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[46] = await instance.transfer(accounts[417], web3.utils.toBN("160000000000000000000000000"), {from: accounts[125], value: web3.utils.toWei("0")})
    console.log("46")
    console.log(result[46])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[47] = await instance.batchTransfer([accounts[1], accounts[381], accounts[323], accounts[222], accounts[271], accounts[288], accounts[188], accounts[297], accounts[186], accounts[287]], [web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("5000000000000000000000"), web3.utils.toBN("5000000000000000000000"), web3.utils.toBN("5000000000000000000000"), web3.utils.toBN("5000000000000000000000"), web3.utils.toBN("5000000000000000000000"), web3.utils.toBN("5000000000000000000000"), web3.utils.toBN("500000000000000000000")], {from: accounts[217], value: web3.utils.toWei("0")})
    console.log("47")
    console.log(result[47])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[48] = await instance.batchTransfer([accounts[231], accounts[307], accounts[307], accounts[231]], [web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("1000000000000000000000"), web3.utils.toBN("1000000000000000000000")], {from: accounts[217], value: web3.utils.toWei("0")})
    console.log("48")
    console.log(result[48])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[49] = await instance.transfer(accounts[217], web3.utils.toBN("1000000000000000000000000"), {from: accounts[301], value: web3.utils.toWei("0")})
    console.log("49")
    console.log(result[49])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[50] = await instance.batchTransfer([accounts[378]], [web3.utils.toBN("100000000000000000000000")], {from: accounts[217], value: web3.utils.toWei("0")})
    console.log("50")
    console.log(result[50])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[51] = await instance.batchTransfer([accounts[214], accounts[288]], [web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000")], {from: accounts[217], value: web3.utils.toWei("0")})
    console.log("51")
    console.log(result[51])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[52] = await instance.batchTransfer([accounts[222], accounts[381], accounts[1], accounts[188], accounts[231], accounts[307], accounts[89], accounts[160], accounts[258], accounts[309], accounts[66], accounts[297], accounts[89], accounts[92], accounts[325], accounts[422], accounts[15], accounts[31], accounts[342], accounts[109], accounts[363], accounts[289], accounts[8]], [web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000"), web3.utils.toBN("500000000000000000000")], {from: accounts[217], value: web3.utils.toWei("0")})
    console.log("52")
    console.log(result[52])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[53] = await instance.batchTransfer([accounts[132], accounts[150], accounts[304], accounts[407], accounts[334], accounts[3], accounts[292], accounts[172], accounts[103], accounts[365], accounts[374], accounts[82], accounts[20], accounts[353], accounts[219], accounts[6], accounts[244], accounts[300], accounts[230], accounts[192], accounts[283], accounts[425], accounts[229], accounts[406], accounts[344], accounts[71], accounts[227], accounts[299], accounts[185], accounts[11], accounts[175], accounts[248], accounts[152], accounts[39], accounts[128], accounts[223], accounts[216], accounts[9], accounts[290], accounts[357], accounts[69], accounts[21], accounts[319], accounts[233], accounts[210], accounts[390], accounts[75], accounts[411], accounts[253], accounts[337], accounts[176], accounts[50], accounts[269], accounts[323], accounts[254], accounts[280], accounts[193], accounts[250], accounts[222], accounts[231], accounts[307], accounts[308], accounts[220], accounts[394], accounts[388], accounts[208], accounts[145], accounts[424], accounts[364], accounts[118], accounts[104], accounts[180], accounts[386], accounts[107], accounts[158], accounts[181], accounts[270], accounts[65], accounts[110], accounts[49], accounts[206], accounts[32], accounts[246], accounts[56], accounts[114], accounts[252], accounts[190], accounts[170], accounts[36], accounts[1], accounts[48], accounts[318], accounts[404], accounts[242], accounts[339], accounts[117], accounts[211], accounts[267], accounts[84]], [web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000")], {from: accounts[217], value: web3.utils.toWei("0")})
    console.log("53")
    console.log(result[53])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[54] = await instance.batchTransfer([accounts[356], accounts[293], accounts[195], accounts[408], accounts[30], accounts[373], accounts[397], accounts[178], accounts[142], accounts[43], accounts[343], accounts[262], accounts[358], accounts[338], accounts[346], accounts[29], accounts[44], accounts[232], accounts[124], accounts[311], accounts[95], accounts[67], accounts[261], accounts[46], accounts[412], accounts[58], accounts[91], accounts[400], accounts[349], accounts[115], accounts[183], accounts[354], accounts[182], accounts[310], accounts[202], accounts[199], accounts[327], accounts[148], accounts[209], accounts[275], accounts[80], accounts[88], accounts[255], accounts[122], accounts[264], accounts[350], accounts[278], accounts[162], accounts[326], accounts[163], accounts[137], accounts[90], accounts[294], accounts[22], accounts[303], accounts[376], accounts[136], accounts[10], accounts[173], accounts[340], accounts[260], accounts[368], accounts[194], accounts[359], accounts[25], accounts[295], accounts[156], accounts[184], accounts[93], accounts[51], accounts[52], accounts[391], accounts[225], accounts[212], accounts[214], accounts[274], accounts[13], accounts[204], accounts[99], accounts[16], accounts[177], accounts[54], accounts[288], accounts[35], accounts[413], accounts[73], accounts[271], accounts[324], accounts[18], accounts[159], accounts[133], accounts[59], accounts[106], accounts[265], accounts[129], accounts[207], accounts[108], accounts[140], accounts[112], accounts[380], accounts[421], accounts[379], accounts[402], accounts[139], accounts[312]], [web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000"), web3.utils.toBN("300000000000000000000")], {from: accounts[217], value: web3.utils.toWei("0")})
    console.log("54")
    console.log(result[54])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[55] = await instance.transfer(accounts[164], web3.utils.toBN("2500000000000000000000000"), {from: accounts[301], value: web3.utils.toWei("0")})
    console.log("55")
    console.log(result[55])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[56] = await instance.transfer(accounts[234], web3.utils.toBN("1250000000000000000000000"), {from: accounts[164], value: web3.utils.toWei("0")})
    console.log("56")
    console.log(result[56])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[57] = await instance.transfer(accounts[102], web3.utils.toBN("114285714000000000000000000"), {from: accounts[166], value: web3.utils.toWei("0")})
    console.log("57")
    console.log(result[57])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[58] = await instance.transfer(accounts[203], web3.utils.toBN("300000000000000000000"), {from: accounts[139], value: web3.utils.toWei("0")})
    console.log("58")
    console.log(result[58])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[59] = await instance.transfer(accounts[203], web3.utils.toBN("300000000000000000000"), {from: accounts[139], value: web3.utils.toWei("0")})
    console.log("59")
    console.log(result[59])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[60] = await instance.batchTransfer([accounts[253], accounts[307], accounts[380], accounts[381], accounts[332], accounts[200], accounts[288], accounts[165], accounts[189], accounts[63], accounts[283], accounts[283], accounts[231], accounts[261], accounts[420], accounts[120], accounts[188], accounts[214], accounts[2]], [web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000"), web3.utils.toBN("200000000000000000000")], {from: accounts[217], value: web3.utils.toWei("0")})
    console.log("60")
    console.log(result[60])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[61] = await instance.transfer(accounts[294], web3.utils.toBN("300000000000000000000"), {from: accounts[44], value: web3.utils.toWei("0")})
    console.log("61")
    console.log(result[61])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[62] = await instance.transfer(accounts[294], web3.utils.toBN("300000000000000000000"), {from: accounts[232], value: web3.utils.toWei("0")})
    console.log("62")
    console.log(result[62])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[63] = await instance.transfer(accounts[384], web3.utils.toBN("10000000000000000000000"), {from: accounts[301], value: web3.utils.toWei("0")})
    console.log("63")
    console.log(result[63])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[64] = await instance.transfer(accounts[377], web3.utils.toBN("142857143000000000000000000"), {from: accounts[251], value: web3.utils.toWei("0")})
    console.log("64")
    console.log(result[64])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[65] = await instance.transfer(accounts[367], web3.utils.toBN("160000000000000000000000000"), {from: accounts[417], value: web3.utils.toWei("0")})
    console.log("65")
    console.log(result[65])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[66] = await instance.transfer(accounts[191], web3.utils.toBN("160000000000000000000000000"), {from: accounts[367], value: web3.utils.toWei("0")})
    console.log("66")
    console.log(result[66])
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
