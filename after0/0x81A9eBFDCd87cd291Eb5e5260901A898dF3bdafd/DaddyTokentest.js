const DaddyToken = artifacts.require("DaddyToken")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await DaddyToken.deployed()
    address = await DaddyToken.address
    try{
      result[1] = await instance.setPrices(web3.utils.toBN("0"), web3.utils.toBN("1000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.distributeToken([accounts[138], accounts[405], accounts[111], accounts[166], accounts[19], accounts[87], accounts[128], accounts[219], accounts[359], accounts[324], accounts[82], accounts[244], accounts[42], accounts[262], accounts[302], accounts[207], accounts[305], accounts[282], accounts[256], accounts[238], accounts[168], accounts[14], accounts[333], accounts[55], accounts[357], accounts[411], accounts[350], accounts[44], accounts[196], accounts[391], accounts[214], accounts[331], accounts[327], accounts[156], accounts[242], accounts[47], accounts[346], accounts[298], accounts[403], accounts[297], accounts[177], accounts[206], accounts[205], accounts[280], accounts[61], accounts[287], accounts[226], accounts[274], accounts[326], accounts[342], accounts[367], accounts[33], accounts[241], accounts[294], accounts[18], accounts[191], accounts[57], accounts[185], accounts[157], accounts[35], accounts[46], accounts[290], accounts[217], accounts[215], accounts[67], accounts[277], accounts[394], accounts[43], accounts[299], accounts[81], accounts[102], accounts[59], accounts[414], accounts[155], accounts[117], accounts[161], accounts[17], accounts[95], accounts[380], accounts[116], accounts[39], accounts[100], accounts[208], accounts[11], accounts[270], accounts[200], accounts[188], accounts[22], accounts[354], accounts[341], accounts[210], accounts[121], accounts[379], accounts[386], accounts[112], accounts[229], accounts[212], accounts[397], accounts[64], accounts[96], accounts[27], accounts[202], accounts[124], accounts[344], accounts[104], accounts[24], accounts[195], accounts[36], accounts[325], accounts[307], accounts[336], accounts[400], accounts[347], accounts[253], accounts[118], accounts[353], accounts[41], accounts[268], accounts[21], accounts[301], accounts[247], accounts[222], accounts[140], accounts[284], accounts[291], accounts[122], accounts[10], accounts[260], accounts[65], accounts[306], accounts[382], accounts[220], accounts[30], accounts[300], accounts[264], accounts[267], accounts[234], accounts[360], accounts[1], accounts[74], accounts[398], accounts[395], accounts[240], accounts[236], accounts[266], accounts[249], accounts[142], accounts[312], accounts[169], accounts[250], accounts[9], accounts[85], accounts[364], accounts[20], accounts[339], accounts[285], accounts[303], accounts[190], accounts[408], accounts[340], accounts[304], accounts[108], accounts[60], accounts[281], accounts[311], accounts[6], accounts[160], accounts[221], accounts[69], accounts[368], accounts[248], accounts[106], accounts[131], accounts[120], accounts[151], accounts[245], accounts[115], accounts[136], accounts[317], accounts[334], accounts[332], accounts[56], accounts[172], accounts[94], accounts[12], accounts[181], accounts[308], accounts[37], accounts[320], accounts[278], accounts[23], accounts[203], accounts[76], accounts[53], accounts[225], accounts[86], accounts[409], accounts[213], accounts[289], accounts[254], accounts[337], accounts[127], accounts[113], accounts[62], accounts[194], accounts[377], accounts[184], accounts[385], accounts[243], accounts[371], accounts[365], accounts[345], accounts[376], accounts[182], accounts[373], accounts[149], accounts[271], accounts[201], accounts[105], accounts[137], accounts[293], accounts[387], accounts[158], accounts[25], accounts[174], accounts[375], accounts[130], accounts[412], accounts[187], accounts[402], accounts[370], accounts[7], accounts[235], accounts[83], accounts[125], accounts[323], accounts[139], accounts[223], accounts[2], accounts[314], accounts[84], accounts[179], accounts[26], accounts[29], accounts[73], accounts[93], accounts[355], accounts[15], accounts[352], accounts[145], accounts[313], accounts[5], accounts[148], accounts[50], accounts[126], accounts[141], accounts[348], accounts[237], accounts[173], accounts[292], accounts[273], accounts[3], accounts[384], accounts[232], accounts[88], accounts[175], accounts[154], accounts[231], accounts[252], accounts[197], accounts[159], accounts[230], accounts[224], accounts[162], accounts[396], accounts[186], accounts[133], accounts[16], accounts[49], accounts[107], accounts[272], accounts[180], accounts[72], accounts[361], accounts[296], accounts[178], accounts[78], accounts[378], accounts[257], accounts[233], accounts[129], accounts[63], accounts[198], accounts[309], accounts[401], accounts[246], accounts[109], accounts[51], accounts[89], accounts[390], accounts[399], accounts[171], accounts[259], accounts[152], accounts[209], accounts[192], accounts[358], accounts[338], accounts[153], accounts[99], accounts[75], accounts[316], accounts[176], accounts[404], accounts[279], accounts[58], accounts[28], accounts[199], accounts[164], accounts[275], accounts[295], accounts[356], accounts[70], accounts[366], accounts[363], accounts[216], accounts[31], accounts[110], accounts[211], accounts[351], accounts[265], accounts[119], accounts[381], accounts[330], accounts[8], accounts[335], accounts[38], accounts[349], accounts[77], accounts[90], accounts[263], accounts[276], accounts[91], accounts[101], accounts[134], accounts[183], accounts[150], accounts[407], accounts[328], accounts[318], accounts[52], accounts[288], accounts[261], accounts[286], accounts[103], accounts[321], accounts[193], accounts[48], accounts[167], accounts[165], accounts[32], accounts[66], accounts[34], accounts[251], accounts[393], accounts[54], accounts[135], accounts[372], accounts[98], accounts[163], accounts[389], accounts[413], accounts[227], accounts[310], accounts[218], accounts[269], accounts[97], accounts[45], accounts[392], accounts[406], accounts[258], accounts[143], accounts[362], accounts[329], accounts[319], accounts[80], accounts[40], accounts[71], accounts[146], accounts[13], accounts[315], accounts[68], accounts[283], accounts[374], accounts[147], accounts[255], accounts[322], accounts[410], accounts[383], accounts[4]], web3.utils.toBN("10"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.transfer(accounts[79], web3.utils.toBN("300"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.distributeToken([accounts[79]], web3.utils.toBN("300"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.transfer(accounts[114], web3.utils.toBN("65000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.transfer(accounts[92], web3.utils.toBN("605000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.transfer(accounts[144], web3.utils.toBN("150000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.approve(accounts[228], web3.utils.toBN("100000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await web3.eth.sendTransaction({to: address, from: accounts[343], value: web3.utils.toWei("0.5")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await web3.eth.sendTransaction({to: address, from: accounts[189], value: web3.utils.toWei("0.01")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await web3.eth.sendTransaction({to: address, from: accounts[239], value: web3.utils.toWei("0.01")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await web3.eth.sendTransaction({to: address, from: accounts[204], value: web3.utils.toWei("0.99958")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await web3.eth.sendTransaction({to: address, from: accounts[123], value: web3.utils.toWei("0.01")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await web3.eth.sendTransaction({to: address, from: accounts[132], value: web3.utils.toWei("0.09071629")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await web3.eth.sendTransaction({to: address, from: accounts[388], value: web3.utils.toWei("0.1145")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await web3.eth.sendTransaction({to: address, from: accounts[369], value: web3.utils.toWei("1.5")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await web3.eth.sendTransaction({to: address, from: accounts[170], value: web3.utils.toWei("0.2")})
    console.log("17")
    console.log(result[17])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[18] = await web3.eth.sendTransaction({to: address, from: accounts[170], value: web3.utils.toWei("0.324")})
    console.log("18")
    console.log(result[18])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[19] = await web3.eth.sendTransaction({to: address, from: accounts[170], value: web3.utils.toWei("0.1702659108885148")})
    console.log("19")
    console.log(result[19])
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
