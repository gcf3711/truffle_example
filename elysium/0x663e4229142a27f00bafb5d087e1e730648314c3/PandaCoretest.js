const PandaCore = artifacts.require("PandaCore")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await PandaCore.deployed()
    address = await PandaCore.address
    try{
      result[1] = await instance.init({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.setGeneScienceAddress(accounts[5], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.setSaleAuctionAddress(accounts[42], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.setSaleAuctionERC20Address(accounts[44], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.setSiringAuctionAddress(accounts[34], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.unpause({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.createWizzPanda(web3.utils.toBN("459666659315937666528710421763083194329163739319012180350408451128982309988"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.createWizzPanda(web3.utils.toBN("397559569377905213401146326980628153918642641374597020756176440139068935268"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.createWizzPanda(web3.utils.toBN("282700706674780671322642708295976993038879022504246678933883014054413370468"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.createWizzPanda(web3.utils.toBN("74771794484907561767062000172575789296992268526489271219780244036395339876"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await instance.createWizzPanda(web3.utils.toBN("173333908626745054505710182216296794754448293040129349000431194658635421796"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await instance.createWizzPanda(web3.utils.toBN("413568170029229732126000834364140669099166839405261345401772454653246607460"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await instance.createWizzPanda(web3.utils.toBN("410034475899424198386239773530641850348742541694798522310169415422322017380"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await instance.createWizzPanda(web3.utils.toBN("403234530311560593380904943312454955743838638533266169792685077602476693604"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await instance.createWizzPanda(web3.utils.toBN("353766263370937468077145288023771416660921348155107735278211037009762485348"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await instance.createWizzPanda(web3.utils.toBN("409920597084744031817213584698747980488540703002823883469607165886210346084"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await instance.createWizzPanda(web3.utils.toBN("56820352236957918603945144927858627764379469482746128070419341195491741796"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("17")
    console.log(result[17])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[18] = await instance.createWizzPanda(web3.utils.toBN("528508128251844208928114632076138129855682543662441130459395579149785601124"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("18")
    console.log(result[18])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[19] = await instance.createWizzPanda(web3.utils.toBN("238971241821300166414745446249901900931130267807688522911734016450462061668"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("19")
    console.log(result[19])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[20] = await instance.createWizzPanda(web3.utils.toBN("525316070566713956715065339133828483416191714402907439791274921626876183652"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("20")
    console.log(result[20])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[21] = await instance.createWizzPanda(web3.utils.toBN("117220985390940892880210150616082820835111953019352598237047449114668897380"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("21")
    console.log(result[21])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[22] = await instance.createWizzPanda(web3.utils.toBN("411747834430074458074117818470754225705342109529488238984376763087067352164"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("22")
    console.log(result[22])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[23] = await instance.createWizzPanda(web3.utils.toBN("578202427385732539128705434252471861587348984481039906194296364305934882916"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("23")
    console.log(result[23])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[24] = await instance.createWizzPanda(web3.utils.toBN("399823342179403692501031761517671854108139462729500263860806488265252246628"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("24")
    console.log(result[24])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[25] = await instance.createWizzPanda(web3.utils.toBN("528622007066617320534778524837601675622420812556672323114749570707824412772"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("25")
    console.log(result[25])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[26] = await instance.createWizzPanda(web3.utils.toBN("627410153401719381061633275133438578777800363100298869744667758514837490788"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("26")
    console.log(result[26])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[27] = await instance.createWizzPanda(web3.utils.toBN("177255825988614217018124781065759614792599393325809800056072984095246944356"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("27")
    console.log(result[27])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[28] = await instance.createWizzPanda(web3.utils.toBN("10932366213522309888688806285267180262925157377816401747699003073434388580"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("28")
    console.log(result[28])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[29] = await instance.createWizzPanda(web3.utils.toBN("512901554325670335760883151394333456862439915016426619011043901685109987428"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("29")
    console.log(result[29])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[30] = await instance.createWizzPanda(web3.utils.toBN("452330102949392598406086176314578517704684751155300761895000723430936023140"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("30")
    console.log(result[30])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[31] = await instance.createWizzPanda(web3.utils.toBN("16072441805347609655565906781059336702282286806620871877722926110048552036"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("31")
    console.log(result[31])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[32] = await instance.createWizzPanda(web3.utils.toBN("344552431997962276636309998868103793850165108026332566217021894557104770148"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("32")
    console.log(result[32])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[33] = await instance.createWizzPanda(web3.utils.toBN("69296984194960449555721398441381217157224093492515705779971436311103046756"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("33")
    console.log(result[33])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[34] = await instance.createWizzPanda(web3.utils.toBN("523492284094614626741452340661914248649581676329324588552941799100803846244"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("34")
    console.log(result[34])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[35] = await instance.createWizzPanda(web3.utils.toBN("569533833973953377145445250415081725006723048009558386326131542087216305252"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("35")
    console.log(result[35])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[36] = await instance.createWizzPanda(web3.utils.toBN("124139986103254591925607007143696468738322247256998546163251335809127876708"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("36")
    console.log(result[36])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[37] = await instance.createWizzPanda(web3.utils.toBN("464739442881037332832238002901373823996508323624959592733146344264559531108"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("37")
    console.log(result[37])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[38] = await instance.createWizzPanda(web3.utils.toBN("235449625748115674165831451633251935002917914527542983740942908977420799076"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("38")
    console.log(result[38])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[39] = await instance.createWizzPanda(web3.utils.toBN("630886908123967790626281418717077592809344158931182850373761833280295962724"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("39")
    console.log(result[39])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[40] = await instance.createWizzPanda(web3.utils.toBN("122036678904420028153709777333674660631660357378865163900791697560009082980"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("40")
    console.log(result[40])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[41] = await instance.createWizzPanda(web3.utils.toBN("56992895895266185721158978304726152451995262535141751197247311338497247332"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("41")
    console.log(result[41])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[42] = await instance.createWizzPanda(web3.utils.toBN("622332193527275706965408041877745412024049120757403650562964946684072761444"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("42")
    console.log(result[42])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[43] = await instance.createWizzPanda(web3.utils.toBN("286562233755846795983211102542061671768953385088073576071434986870437710948"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("43")
    console.log(result[43])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[44] = await instance.createWizzPanda(web3.utils.toBN("634475816223924936501641770718259027942602481564366982138912677400084093028"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("44")
    console.log(result[44])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[45] = await instance.createWizzPanda(web3.utils.toBN("640150777157988014179062074743302448747449492137970231004524234210102315108"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("45")
    console.log(result[45])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[46] = await instance.createWizzPanda(web3.utils.toBN("283304609479860049553289788790749812634016501021262155503391079085862195300"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("46")
    console.log(result[46])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[47] = await instance.createWizzPanda(web3.utils.toBN("359113391353055304987837052827625979964462747425523847586142106612141299812"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("47")
    console.log(result[47])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[48] = await instance.createWizzPanda(web3.utils.toBN("397607881602435544507849247593280846785630157366036315977242725069685394532"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("48")
    console.log(result[48])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[49] = await instance.createWizzPanda(web3.utils.toBN("341341394510220702291729388827571913687252934974865249512309858520440805476"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("49")
    console.log(result[49])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[50] = await instance.createWizzPanda(web3.utils.toBN("123806976842174355556537394681987906399035854465076744554654219677340962916"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("50")
    console.log(result[50])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[51] = await instance.createWizzPanda(web3.utils.toBN("411910025469473170068026433113417190570280144873898633838954046380907334756"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("51")
    console.log(result[51])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[52] = await instance.createWizzPanda(web3.utils.toBN("169908917001994260712813168713552020051512148826189432403865293380291530852"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("52")
    console.log(result[52])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[53] = await instance.createWizzPanda(web3.utils.toBN("185907165034214844918156381257296507285289909842108568209426462476577376356"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("53")
    console.log(result[53])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[54] = await instance.createWizzPanda(web3.utils.toBN("357239567220154008019959339496756545054880240216557339176337334878216589412"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("54")
    console.log(result[54])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[55] = await instance.createWizzPanda(web3.utils.toBN("634468914477987847946771760779705590742311801515816341535109879262995452004"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("55")
    console.log(result[55])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[56] = await instance.createWizzPanda(web3.utils.toBN("346866242460732186444216012970069792575752363503255738993427570351858091108"), web3.utils.toBN("0"), accounts[0], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("56")
    console.log(result[56])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[57] = await instance.breedWithAuto(web3.utils.toBN("49"), web3.utils.toBN("37"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("57")
    console.log(result[57])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[58] = await instance.breedWithAuto(web3.utils.toBN("19"), web3.utils.toBN("3"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("58")
    console.log(result[58])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[59] = await instance.breedWithAuto(web3.utils.toBN("8"), web3.utils.toBN("18"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("59")
    console.log(result[59])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[60] = await instance.breedWithAuto(web3.utils.toBN("46"), web3.utils.toBN("15"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("60")
    console.log(result[60])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[61] = await instance.breedWithAuto(web3.utils.toBN("44"), web3.utils.toBN("50"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("61")
    console.log(result[61])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[62] = await instance.breedWithAuto(web3.utils.toBN("47"), web3.utils.toBN("20"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("62")
    console.log(result[62])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[63] = await instance.breedWithAuto(web3.utils.toBN("6"), web3.utils.toBN("42"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("63")
    console.log(result[63])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[64] = await instance.breedWithAuto(web3.utils.toBN("43"), web3.utils.toBN("16"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("64")
    console.log(result[64])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[65] = await instance.breedWithAuto(web3.utils.toBN("4"), web3.utils.toBN("13"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("65")
    console.log(result[65])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[66] = await instance.breedWithAuto(web3.utils.toBN("33"), web3.utils.toBN("9"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("66")
    console.log(result[66])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[67] = await instance.breedWithAuto(web3.utils.toBN("35"), web3.utils.toBN("29"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("67")
    console.log(result[67])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[68] = await instance.breedWithAuto(web3.utils.toBN("5"), web3.utils.toBN("10"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("68")
    console.log(result[68])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[69] = await instance.breedWithAuto(web3.utils.toBN("39"), web3.utils.toBN("32"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("69")
    console.log(result[69])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[70] = await instance.breedWithAuto(web3.utils.toBN("22"), web3.utils.toBN("7"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("70")
    console.log(result[70])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[71] = await instance.breedWithAuto(web3.utils.toBN("24"), web3.utils.toBN("14"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("71")
    console.log(result[71])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[72] = await instance.breedWithAuto(web3.utils.toBN("36"), web3.utils.toBN("45"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("72")
    console.log(result[72])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[73] = await instance.breedWithAuto(web3.utils.toBN("17"), web3.utils.toBN("1"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("73")
    console.log(result[73])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[74] = await instance.breedWithAuto(web3.utils.toBN("41"), web3.utils.toBN("25"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("74")
    console.log(result[74])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[75] = await instance.breedWithAuto(web3.utils.toBN("38"), web3.utils.toBN("31"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("75")
    console.log(result[75])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[76] = await instance.breedWithAuto(web3.utils.toBN("23"), web3.utils.toBN("27"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("76")
    console.log(result[76])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[77] = await instance.breedWithAuto(web3.utils.toBN("21"), web3.utils.toBN("26"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("77")
    console.log(result[77])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[78] = await instance.breedWithAuto(web3.utils.toBN("48"), web3.utils.toBN("2"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("78")
    console.log(result[78])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[79] = await instance.breedWithAuto(web3.utils.toBN("30"), web3.utils.toBN("12"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("79")
    console.log(result[79])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[80] = await instance.giveBirth(web3.utils.toBN("30"), web3.utils.toBN("243899088713169048502409087297021266698040095330749016570782269362935994464"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("80")
    console.log(result[80])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[81] = await instance.giveBirth(web3.utils.toBN("33"), web3.utils.toBN("351887262927821059139644466989690213501317121653111020969822239291347179619"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("81")
    console.log(result[81])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[82] = await instance.giveBirth(web3.utils.toBN("4"), web3.utils.toBN("63829075652016173026216575611206138882772948160876369841586804651850892382"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("82")
    console.log(result[82])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[83] = await instance.giveBirth(web3.utils.toBN("5"), web3.utils.toBN("244050927132335553499416516243339926569479405687288718356151412269405803613"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("83")
    console.log(result[83])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[84] = await instance.giveBirth(web3.utils.toBN("6"), web3.utils.toBN("170072833477981367674219965199436367790356770485558001044548184220598735963"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("84")
    console.log(result[84])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[85] = await instance.giveBirth(web3.utils.toBN("47"), web3.utils.toBN("244275233888754281273092550015677850860127293475133560349678683472409038938"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("85")
    console.log(result[85])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[86] = await instance.giveBirth(web3.utils.toBN("43"), web3.utils.toBN("76490329325104037772292344962219565395745360616526025884632681859065744471"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("86")
    console.log(result[86])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[87] = await instance.giveBirth(web3.utils.toBN("36"), web3.utils.toBN("18284451509656234305819683661523425339602887627355249480321887694797965396"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("87")
    console.log(result[87])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[88] = await instance.giveBirth(web3.utils.toBN("46"), web3.utils.toBN("67749267577100779242092393633525571771695831618097157888306263657659139166"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("88")
    console.log(result[88])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[89] = await instance.giveBirth(web3.utils.toBN("23"), web3.utils.toBN("230143908244071864147023049125037821728820856223462826926958727427626472530"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("89")
    console.log(result[89])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[90] = await instance.giveBirth(web3.utils.toBN("24"), web3.utils.toBN("413954667824701282719897428139412041880686233269450225659588084183259450456"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("90")
    console.log(result[90])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[91] = await instance.giveBirth(web3.utils.toBN("21"), web3.utils.toBN("187672286662199531622865067079388105114693216888529596563220126276623860826"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("91")
    console.log(result[91])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[92] = await instance.giveBirth(web3.utils.toBN("22"), web3.utils.toBN("358963278370069094720626792864399793616705408172257685539212486084756805727"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("92")
    console.log(result[92])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[93] = await instance.giveBirth(web3.utils.toBN("35"), web3.utils.toBN("623821245301081201079525150009839408856821508370641133431490366057794868321"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("93")
    console.log(result[93])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[94] = await instance.giveBirth(web3.utils.toBN("49"), web3.utils.toBN("19932243449952470581514603381824896761584533525467602286561808190207562851"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("94")
    console.log(result[94])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[95] = await instance.giveBirth(web3.utils.toBN("39"), web3.utils.toBN("174978249693954839278564793426345499094254739714706690144956283677947565153"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("95")
    console.log(result[95])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[96] = await instance.giveBirth(web3.utils.toBN("44"), web3.utils.toBN("117055343478726837699649392786773518439757005605744585422505527542814020694"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("96")
    console.log(result[96])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[97] = await instance.giveBirth(web3.utils.toBN("48"), web3.utils.toBN("127658151303566133152687982751662995547006813119671833855577590091300934747"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("97")
    console.log(result[97])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[98] = await instance.giveBirth(web3.utils.toBN("19"), web3.utils.toBN("238752111374799167037993152094614599647042308137984277737914757759731043427"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("98")
    console.log(result[98])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[99] = await instance.createWizzPanda(web3.utils.toBN("629168373283506118012071962304005294368505521056068519058664556195618096197"), web3.utils.toBN("4"), accounts[51], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("99")
    console.log(result[99])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[100] = await instance.createWizzPanda(web3.utils.toBN("634356761099450515647277596761893713479857060615175188003791634158466469949"), web3.utils.toBN("5"), accounts[47], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("100")
    console.log(result[100])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[101] = await instance.createWizzPanda(web3.utils.toBN("228487489120319910112768426777186443246517995694556631085817766149118695471"), web3.utils.toBN("3"), accounts[39], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("101")
    console.log(result[101])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[102] = await instance.createWizzPanda(web3.utils.toBN("408485033845090468566052475243280585448745257871162719312834357779339710526"), web3.utils.toBN("4"), accounts[20], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("102")
    console.log(result[102])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[103] = await instance.createWizzPanda(web3.utils.toBN("12606039702464553118361861448574009085945677892234281811948892971643995204"), web3.utils.toBN("6"), accounts[16], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("103")
    console.log(result[103])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[104] = await instance.createWizzPanda(web3.utils.toBN("516267881106109847873820716634722054184992936021844560868078743645344370765"), web3.utils.toBN("3"), accounts[52], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("104")
    console.log(result[104])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[105] = await instance.createWizzPanda(web3.utils.toBN("65763290065815171845959845244822907655108052061374924844832248610458637382"), web3.utils.toBN("4"), accounts[24], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("105")
    console.log(result[105])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[106] = await instance.createWizzPanda(web3.utils.toBN("173703152056139457145289967287108965123516727658974365698468369864874626099"), web3.utils.toBN("3"), accounts[8], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("106")
    console.log(result[106])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[107] = await instance.createWizzPanda(web3.utils.toBN("10942718833203136183431156350885318855965893088135656174613834693977703497"), web3.utils.toBN("3"), accounts[9], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("107")
    console.log(result[107])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[108] = await instance.createWizzPanda(web3.utils.toBN("226781032336391003364102539682001503306036769585999516835125960058076207164"), web3.utils.toBN("6"), accounts[19], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("108")
    console.log(result[108])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[109] = await instance.createWizzPanda(web3.utils.toBN("627855316040971810976844228594796432307102392690770291715017643462017193023"), web3.utils.toBN("3"), accounts[18], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("109")
    console.log(result[109])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[110] = await instance.createSiringAuction(web3.utils.toBN("52"), web3.utils.toBN("200000000000000000"), web3.utils.toBN("100000000000000000"), web3.utils.toBN("360000"), {from: accounts[48], value: web3.utils.toWei("0")})
    console.log("110")
    console.log(result[110])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[111] = await instance.createWizzPanda(web3.utils.toBN("353995746436664291948643031156092959576405468473046136934590083302817990710"), web3.utils.toBN("3"), accounts[41], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("111")
    console.log(result[111])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[112] = await instance.createWizzPanda(web3.utils.toBN("14317672796949275725931269705396595530446954271654952846829747550733567036"), web3.utils.toBN("4"), accounts[51], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("112")
    console.log(result[112])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[113] = await instance.createWizzPanda(web3.utils.toBN("231905578998575934055567155425584760839198731547357714048747613910564146226"), web3.utils.toBN("4"), accounts[39], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("113")
    console.log(result[113])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[114] = await instance.createSaleAuction(web3.utils.toBN("51"), web3.utils.toBN("10000000000000000"), web3.utils.toBN("5000000000000000"), web3.utils.toBN("172800"), {from: accounts[51], value: web3.utils.toWei("0")})
    console.log("114")
    console.log(result[114])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[115] = await instance.createSiringAuction(web3.utils.toBN("52"), web3.utils.toBN("200000000000000"), web3.utils.toBN("100000000000000"), web3.utils.toBN("36000"), {from: accounts[48], value: web3.utils.toWei("0")})
    console.log("115")
    console.log(result[115])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[116] = await instance.createSaleAuction(web3.utils.toBN("60"), web3.utils.toBN("10000000000000000"), web3.utils.toBN("10000000000000000"), web3.utils.toBN("3600"), {from: accounts[19], value: web3.utils.toWei("0")})
    console.log("116")
    console.log(result[116])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[117] = await instance.bidOnSiringAuction(web3.utils.toBN("52"), web3.utils.toBN("63"), {from: accounts[51], value: web3.utils.toWei("0.002198")})
    console.log("117")
    console.log(result[117])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[118] = await instance.breedWithAuto(web3.utils.toBN("60"), web3.utils.toBN("59"), {from: accounts[9], value: web3.utils.toWei("0.002")})
    console.log("118")
    console.log(result[118])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[119] = await instance.giveBirth(web3.utils.toBN("52"), web3.utils.toBN("413552641099793933058494746674366426750556917884426881896367842631797050369"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("119")
    console.log(result[119])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[120] = await instance.giveBirth(web3.utils.toBN("60"), web3.utils.toBN("632531249191134442495271846541907730035112134574652355532415021009182327809"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("120")
    console.log(result[120])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[121] = await instance.createSaleAuction(web3.utils.toBN("65"), web3.utils.toBN("10000000000000"), web3.utils.toBN("1000000000000"), web3.utils.toBN("3600"), {from: accounts[51], value: web3.utils.toWei("0")})
    console.log("121")
    console.log(result[121])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[122] = await instance.createWizzPanda(web3.utils.toBN("238645134306411508122974858932249528352420444600272428025463683652071264301"), web3.utils.toBN("6"), accounts[41], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("122")
    console.log(result[122])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[123] = await instance.createWizzPanda(web3.utils.toBN("452659661337416339828682062357189626152464687566153009264591368921657971772"), web3.utils.toBN("3"), accounts[41], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("123")
    console.log(result[123])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[124] = await instance.giveBirth(web3.utils.toBN("49"), web3.utils.toBN("585000647537004685403529542342619655722750384891387903749327867741965716574"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("124")
    console.log(result[124])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[125] = await instance.giveBirth(web3.utils.toBN("19"), web3.utils.toBN("69017463469630621330931396078532149325849549030966366529001650327327840"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("125")
    console.log(result[125])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[126] = await instance.giveBirth(web3.utils.toBN("46"), web3.utils.toBN("122361060982712868465413600199029478423969355100850553983916412012311186526"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("126")
    console.log(result[126])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[127] = await instance.giveBirth(web3.utils.toBN("33"), web3.utils.toBN("297446287744647488484469954856188211744120490402587178014654984630403405920"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("127")
    console.log(result[127])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[128] = await instance.giveBirth(web3.utils.toBN("6"), web3.utils.toBN("237047380026872173658538571131817993196983852547491234543371688190898443361"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("128")
    console.log(result[128])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[129] = await instance.giveBirth(web3.utils.toBN("8"), web3.utils.toBN("397820110302596635959280155966653889060448323755933332708507511090641568860"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("129")
    console.log(result[129])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[130] = await instance.giveBirth(web3.utils.toBN("35"), web3.utils.toBN("344536903068694694519777122517524924128475464054065468063395180722673322082"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("130")
    console.log(result[130])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[131] = await instance.giveBirth(web3.utils.toBN("43"), web3.utils.toBN("636470420918299702852386985585393941661596442962761798880779245705896199268"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("131")
    console.log(result[131])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[132] = await instance.giveBirth(web3.utils.toBN("4"), web3.utils.toBN("627732810043627520461362789851380242505648295848556612134046338146795423844"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("132")
    console.log(result[132])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[133] = await instance.giveBirth(web3.utils.toBN("44"), web3.utils.toBN("245766011099606556050066045862137187449843569505280933918538993198761547871"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("133")
    console.log(result[133])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[134] = await instance.giveBirth(web3.utils.toBN("47"), web3.utils.toBN("572860475713372733120707344561863652404007198935691560557904705335831106657"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("134")
    console.log(result[134])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[135] = await instance.giveBirth(web3.utils.toBN("36"), web3.utils.toBN("463259018289331070285884153048118312266147726504381368816661918860436408415"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("135")
    console.log(result[135])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[136] = await instance.giveBirth(web3.utils.toBN("38"), web3.utils.toBN("528792825289166708413822824374708234708861697613851632174981937548303177824"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("136")
    console.log(result[136])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[137] = await instance.giveBirth(web3.utils.toBN("30"), web3.utils.toBN("65542434182605538539137383436750960644170203316226967433566231080595392609"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("137")
    console.log(result[137])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[138] = await instance.giveBirth(web3.utils.toBN("48"), web3.utils.toBN("69088206368373438004820613798131434990383041069944371084128488228664741982"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("138")
    console.log(result[138])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[139] = await instance.giveBirth(web3.utils.toBN("23"), web3.utils.toBN("65714977841341276553409238002870994876934678426958968006095700857482939492"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("139")
    console.log(result[139])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[140] = await instance.giveBirth(web3.utils.toBN("21"), web3.utils.toBN("452707973561734347462026787905537687056303656091380449452226766946232862820"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("140")
    console.log(result[140])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[141] = await instance.giveBirth(web3.utils.toBN("41"), web3.utils.toBN("288606876110584139945837233771605240326946218775008103192584360880971487331"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("141")
    console.log(result[141])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[142] = await instance.createGen0Auction(web3.utils.toBN("69"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("142")
    console.log(result[142])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[143] = await instance.createGen0Auction(web3.utils.toBN("1"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("143")
    console.log(result[143])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[144] = await instance.giveBirth(web3.utils.toBN("5"), web3.utils.toBN("18275824326560291569622668458734727718533254050197943708799925420660197475"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("144")
    console.log(result[144])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[145] = await instance.giveBirth(web3.utils.toBN("17"), web3.utils.toBN("358744147923815602793936874627844006527213892321611493520773407576604971105"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("145")
    console.log(result[145])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[146] = await instance.giveBirth(web3.utils.toBN("22"), web3.utils.toBN("346424530694737957018489163787077315272411930068204656395329106604642732131"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("146")
    console.log(result[146])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[147] = await instance.giveBirth(web3.utils.toBN("24"), web3.utils.toBN("184309410754722566953582285668334756922073061731647229836608338489830840414"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("147")
    console.log(result[147])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[148] = await instance.giveBirth(web3.utils.toBN("39"), web3.utils.toBN("581906939737367650722373977301762461663108466368202564725344728479249371236"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("148")
    console.log(result[148])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[149] = await instance.breedWithAuto(web3.utils.toBN("8"), web3.utils.toBN("15"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("149")
    console.log(result[149])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[150] = await instance.breedWithAuto(web3.utils.toBN("33"), web3.utils.toBN("18"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("150")
    console.log(result[150])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[151] = await instance.breedWithAuto(web3.utils.toBN("19"), web3.utils.toBN("16"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("151")
    console.log(result[151])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[152] = await instance.breedWithAuto(web3.utils.toBN("47"), web3.utils.toBN("9"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("152")
    console.log(result[152])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[153] = await instance.breedWithAuto(web3.utils.toBN("40"), web3.utils.toBN("12"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("153")
    console.log(result[153])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[154] = await instance.breedWithAuto(web3.utils.toBN("44"), web3.utils.toBN("27"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("154")
    console.log(result[154])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[155] = await instance.breedWithAuto(web3.utils.toBN("4"), web3.utils.toBN("29"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("155")
    console.log(result[155])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[156] = await instance.breedWithAuto(web3.utils.toBN("24"), web3.utils.toBN("3"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("156")
    console.log(result[156])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[157] = await instance.breedWithAuto(web3.utils.toBN("17"), web3.utils.toBN("1"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("157")
    console.log(result[157])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[158] = await instance.breedWithAuto(web3.utils.toBN("46"), web3.utils.toBN("7"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("158")
    console.log(result[158])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[159] = await instance.breedWithAuto(web3.utils.toBN("6"), web3.utils.toBN("2"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("159")
    console.log(result[159])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[160] = await instance.breedWithAuto(web3.utils.toBN("21"), web3.utils.toBN("50"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("160")
    console.log(result[160])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[161] = await instance.breedWithAuto(web3.utils.toBN("39"), web3.utils.toBN("31"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("161")
    console.log(result[161])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[162] = await instance.breedWithAuto(web3.utils.toBN("41"), web3.utils.toBN("10"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("162")
    console.log(result[162])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[163] = await instance.breedWithAuto(web3.utils.toBN("38"), web3.utils.toBN("14"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("163")
    console.log(result[163])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[164] = await instance.breedWithAuto(web3.utils.toBN("5"), web3.utils.toBN("13"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("164")
    console.log(result[164])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[165] = await instance.breedWithAuto(web3.utils.toBN("35"), web3.utils.toBN("45"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("165")
    console.log(result[165])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[166] = await instance.breedWithAuto(web3.utils.toBN("43"), web3.utils.toBN("32"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("166")
    console.log(result[166])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[167] = await instance.breedWithAuto(web3.utils.toBN("49"), web3.utils.toBN("42"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("167")
    console.log(result[167])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[168] = await instance.breedWithAuto(web3.utils.toBN("28"), web3.utils.toBN("26"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("168")
    console.log(result[168])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[169] = await instance.breedWithAuto(web3.utils.toBN("30"), web3.utils.toBN("25"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("169")
    console.log(result[169])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[170] = await instance.breedWithAuto(web3.utils.toBN("23"), web3.utils.toBN("20"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("170")
    console.log(result[170])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[171] = await instance.breedWithAuto(web3.utils.toBN("34"), web3.utils.toBN("37"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("171")
    console.log(result[171])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[172] = await instance.createGen0Auction(web3.utils.toBN("70"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("172")
    console.log(result[172])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[173] = await instance.createGen0Auction(web3.utils.toBN("71"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("173")
    console.log(result[173])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[174] = await instance.createGen0Auction(web3.utils.toBN("72"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("174")
    console.log(result[174])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[175] = await instance.createGen0Auction(web3.utils.toBN("73"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("175")
    console.log(result[175])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[176] = await instance.createGen0Auction(web3.utils.toBN("74"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("176")
    console.log(result[176])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[177] = await instance.createGen0Auction(web3.utils.toBN("75"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("177")
    console.log(result[177])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[178] = await instance.createGen0Auction(web3.utils.toBN("76"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("178")
    console.log(result[178])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[179] = await instance.createGen0Auction(web3.utils.toBN("77"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("179")
    console.log(result[179])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[180] = await instance.createWizzPanda(web3.utils.toBN("578098901190214209297722305933308449192342357117929052716080493754155436075"), web3.utils.toBN("5"), accounts[25], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("180")
    console.log(result[180])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[181] = await instance.createGen0Auction(web3.utils.toBN("78"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("181")
    console.log(result[181])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[182] = await instance.createGen0Auction(web3.utils.toBN("79"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("182")
    console.log(result[182])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[183] = await instance.createGen0Auction(web3.utils.toBN("80"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("183")
    console.log(result[183])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[184] = await instance.createGen0Auction(web3.utils.toBN("81"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("184")
    console.log(result[184])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[185] = await instance.createWizzPanda(web3.utils.toBN("413889101234456578171593620362899418818214395421437528988722063411925620796"), web3.utils.toBN("4"), accounts[21], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("185")
    console.log(result[185])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[186] = await instance.createGen0Auction(web3.utils.toBN("82"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("186")
    console.log(result[186])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[187] = await instance.createGen0Auction(web3.utils.toBN("83"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("187")
    console.log(result[187])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[188] = await instance.createWizzPanda(web3.utils.toBN("456019086371499366147714007183020110756648313670809669077759288194073925682"), web3.utils.toBN("5"), accounts[14], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("188")
    console.log(result[188])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[189] = await instance.createWizzPanda(web3.utils.toBN("178522296442880581743640366263226602137602011445201546419373635359814489138"), web3.utils.toBN("5"), accounts[49], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("189")
    console.log(result[189])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[190] = await instance.createWizzPanda(web3.utils.toBN("298771423042975561730484569716190799975177420325639747482618079759939342391"), web3.utils.toBN("6"), accounts[17], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("190")
    console.log(result[190])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[191] = await instance.createGen0Auction(web3.utils.toBN("84"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("191")
    console.log(result[191])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[192] = await instance.createWizzPanda(web3.utils.toBN("76531739803504315394314168120312973494685564287803613050230438141800614963"), web3.utils.toBN("4"), accounts[27], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("192")
    console.log(result[192])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[193] = await instance.createGen0Auction(web3.utils.toBN("85"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("193")
    console.log(result[193])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[194] = await instance.createWizzPanda(web3.utils.toBN("514556248012311519916651096812961773767756445862939045343898434790775523368"), web3.utils.toBN("4"), accounts[15], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("194")
    console.log(result[194])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[195] = await instance.createWizzPanda(web3.utils.toBN("350172178961046998600802000237391039557631497338039669093165561487045040183"), web3.utils.toBN("6"), accounts[10], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("195")
    console.log(result[195])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[196] = await instance.createWizzPanda(web3.utils.toBN("131084868365165408024598817854540539493739181284553353482574402705950966838"), web3.utils.toBN("4"), accounts[40], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("196")
    console.log(result[196])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[197] = await instance.createWizzPanda(web3.utils.toBN("293629622014600771602596624534253927118502676488637442207446274937455744043"), web3.utils.toBN("6"), accounts[22], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("197")
    console.log(result[197])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[198] = await instance.createWizzPanda(web3.utils.toBN("456353821069889361522061988229402596242343054063444128126047894334575088686"), web3.utils.toBN("2"), accounts[3], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("198")
    console.log(result[198])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[199] = await instance.breedWithAuto(web3.utils.toBN("80"), web3.utils.toBN("70"), {from: accounts[51], value: web3.utils.toWei("0.002")})
    console.log("199")
    console.log(result[199])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[200] = await instance.createSaleAuction(web3.utils.toBN("63"), web3.utils.toBN("9000000000000000"), web3.utils.toBN("1000000000000000"), web3.utils.toBN("259200"), {from: accounts[51], value: web3.utils.toWei("0")})
    console.log("200")
    console.log(result[200])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[201] = await instance.createSaleAuction(web3.utils.toBN("65"), web3.utils.toBN("900000000000000"), web3.utils.toBN("100000000000000"), web3.utils.toBN("259200"), {from: accounts[51], value: web3.utils.toWei("0")})
    console.log("201")
    console.log(result[201])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[202] = await instance.giveBirth(web3.utils.toBN("80"), web3.utils.toBN("297437660561603271855714407308531994887596667497296452048454907535432975456"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("202")
    console.log(result[202])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[203] = await instance.createGen0Auction(web3.utils.toBN("86"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("203")
    console.log(result[203])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[204] = await instance.createWizzPanda(web3.utils.toBN("415222863715831246712376490003614333392844602982859579358987385072777270330"), web3.utils.toBN("4"), accounts[29], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("204")
    console.log(result[204])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[205] = await instance.createWizzPanda(web3.utils.toBN("122026326284698984817607176787952956396908224012837668645026547847247533101"), web3.utils.toBN("6"), accounts[4], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("205")
    console.log(result[205])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[206] = await instance.createGen0Auction(web3.utils.toBN("88"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("206")
    console.log(result[206])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[207] = await instance.breedWithAuto(web3.utils.toBN("77"), web3.utils.toBN("76"), {from: accounts[10], value: web3.utils.toWei("0.002")})
    console.log("207")
    console.log(result[207])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[208] = await instance.breedWithAuto(web3.utils.toBN("77"), web3.utils.toBN("76"), {from: accounts[10], value: web3.utils.toWei("0.002")})
    console.log("208")
    console.log(result[208])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[209] = await instance.createWizzPanda(web3.utils.toBN("227931898539771308760088573488934700072153005324725350069668074302842507312"), web3.utils.toBN("3"), accounts[7], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("209")
    console.log(result[209])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[210] = await instance.createSaleAuction(web3.utils.toBN("100"), web3.utils.toBN("200000000000000000"), web3.utils.toBN("200000000000000000"), web3.utils.toBN("86400"), {from: accounts[22], value: web3.utils.toWei("0")})
    console.log("210")
    console.log(result[210])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[211] = await instance.createWizzPanda(web3.utils.toBN("299166548021364871725827461388722921185699378300323725468733200295782421561"), web3.utils.toBN("6"), accounts[6], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("211")
    console.log(result[211])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[212] = await instance.createWizzPanda(web3.utils.toBN("282761096955249152563815578411623315153603622340440217328749102847989223468"), web3.utils.toBN("6"), accounts[31], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("212")
    console.log(result[212])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[213] = await instance.createWizzPanda(web3.utils.toBN("5802643241178762842842564527405023109450966806066581011986837449926050861"), web3.utils.toBN("5"), accounts[46], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("213")
    console.log(result[213])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[214] = await instance.createWizzPanda(web3.utils.toBN("355633185758004583203002403517321241027267649495165931365267453946952256563"), web3.utils.toBN("3"), accounts[37], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("214")
    console.log(result[214])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[215] = await instance.createSaleAuction(web3.utils.toBN("53"), web3.utils.toBN("6000000000000000000"), web3.utils.toBN("5000000000000000000"), web3.utils.toBN("3600000"), {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("215")
    console.log(result[215])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[216] = await instance.createSaleAuction(web3.utils.toBN("53"), web3.utils.toBN("6000000000000000000"), web3.utils.toBN("5000000000000000000"), web3.utils.toBN("3600000"), {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("216")
    console.log(result[216])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[217] = await instance.createSaleAuction(web3.utils.toBN("64"), web3.utils.toBN("6000000000000000000"), web3.utils.toBN("5000000000000000000"), web3.utils.toBN("3600000"), {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("217")
    console.log(result[217])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[218] = await instance.giveBirth(web3.utils.toBN("77"), web3.utils.toBN("189672067666032146935468552603780616903436604698538519897138574547095751773"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("218")
    console.log(result[218])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[219] = await instance.createWizzPanda(web3.utils.toBN("227924996793372851420858299402736137349019220762669422047312938884955017259"), web3.utils.toBN("6"), accounts[38], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("219")
    console.log(result[219])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[220] = await instance.breedWithAuto(web3.utils.toBN("77"), web3.utils.toBN("76"), {from: accounts[10], value: web3.utils.toWei("0.002")})
    console.log("220")
    console.log(result[220])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[221] = await instance.createWizzPanda(web3.utils.toBN("60576627686301928456793600512747377547353029433593216094535339720214382651"), web3.utils.toBN("4"), accounts[30], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("221")
    console.log(result[221])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[222] = await instance.breedWithAuto(web3.utils.toBN("98"), web3.utils.toBN("110"), {from: accounts[10], value: web3.utils.toWei("0.002")})
    console.log("222")
    console.log(result[222])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[223] = await instance.createWizzPanda(web3.utils.toBN("515936597281479865208774201306852407374604386405457966625845105091289419835"), web3.utils.toBN("5"), accounts[41], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("223")
    console.log(result[223])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[224] = await instance.giveBirth(web3.utils.toBN("77"), web3.utils.toBN("189237257646184492067301765498175971011135032539865639617179001882054690910"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("224")
    console.log(result[224])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[225] = await instance.giveBirth(web3.utils.toBN("98"), web3.utils.toBN("627627558411334392094819296798260317404496460178819850644744692093103019071"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("225")
    console.log(result[225])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[226] = await instance.createWizzPanda(web3.utils.toBN("114862313576823683873157628683399396078341792729477898836546438748659881020"), web3.utils.toBN("6"), accounts[45], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("226")
    console.log(result[226])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[227] = await instance.breedWithAuto(web3.utils.toBN("77"), web3.utils.toBN("76"), {from: accounts[10], value: web3.utils.toWei("0.002")})
    console.log("227")
    console.log(result[227])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[228] = await instance.breedWithAuto(web3.utils.toBN("72"), web3.utils.toBN("69"), {from: accounts[10], value: web3.utils.toWei("0.002")})
    console.log("228")
    console.log(result[228])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[229] = await instance.createSaleAuction(web3.utils.toBN("114"), web3.utils.toBN("60000000000000000"), web3.utils.toBN("30000000000000000"), web3.utils.toBN("86400"), {from: accounts[10], value: web3.utils.toWei("0")})
    console.log("229")
    console.log(result[229])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[230] = await instance.giveBirth(web3.utils.toBN("72"), web3.utils.toBN("631057726346153814151973937936335912222782127319798278181307391428733768794"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("230")
    console.log(result[230])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[231] = await instance.giveBirth(web3.utils.toBN("33"), web3.utils.toBN("452813225193463506731585349817050199080757352083389646145969356902628494433"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("231")
    console.log(result[231])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[232] = await instance.giveBirth(web3.utils.toBN("8"), web3.utils.toBN("629218410944475353765016085127892200480548854232727216309015059270628181088"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("232")
    console.log(result[232])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[233] = await instance.giveBirth(web3.utils.toBN("19"), web3.utils.toBN("353659286302345480138996047552287369413241491432331209677792649383737657443"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("233")
    console.log(result[233])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[234] = await instance.giveBirth(web3.utils.toBN("47"), web3.utils.toBN("70853327996170065823280695450024491306442117236546236430724848578720732254"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("234")
    console.log(result[234])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[235] = await instance.giveBirth(web3.utils.toBN("40"), web3.utils.toBN("358844223245585152730475337235520444567389427920402447359841674249458817122"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("235")
    console.log(result[235])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[236] = await instance.giveBirth(web3.utils.toBN("4"), web3.utils.toBN("290223610192472234254201185984658115503211054354382562652264778516537575518"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("236")
    console.log(result[236])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[237] = await instance.giveBirth(web3.utils.toBN("24"), web3.utils.toBN("397723485853908705413700446717808026239429330607196070135034133402261426272"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("237")
    console.log(result[237])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[238] = await instance.giveBirth(web3.utils.toBN("46"), web3.utils.toBN("125891304238694557744403435328687165701324051563886349803055474490250270814"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("238")
    console.log(result[238])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[239] = await instance.giveBirth(web3.utils.toBN("44"), web3.utils.toBN("228156205295730414651556583583295947357291619459062775959599693038000050274"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("239")
    console.log(result[239])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[240] = await instance.giveBirth(web3.utils.toBN("17"), web3.utils.toBN("456460798138202300753616123212729117706273621960877081844642555848040744032"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("240")
    console.log(result[240])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[241] = await instance.giveBirth(web3.utils.toBN("6"), web3.utils.toBN("74318004662655448357360069345785136901422770926498894607408871181216941155"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("241")
    console.log(result[241])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[242] = await instance.giveBirth(web3.utils.toBN("21"), web3.utils.toBN("184368075598464292954079257151523471850435257693499363196727121370980389984"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("242")
    console.log(result[242])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[243] = await instance.giveBirth(web3.utils.toBN("5"), web3.utils.toBN("638328716122171402209981089943662188933670620942243625559634091813172876382"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("243")
    console.log(result[243])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[244] = await instance.giveBirth(web3.utils.toBN("41"), web3.utils.toBN("2275850858270452945720956967855372226389154716986112855861424134155243616"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("244")
    console.log(result[244])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[245] = await instance.giveBirth(web3.utils.toBN("39"), web3.utils.toBN("233667249753800012250355711337898137198204295590675122416269120960539498595"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("245")
    console.log(result[245])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[246] = await instance.giveBirth(web3.utils.toBN("35"), web3.utils.toBN("569212902769201930191710393022123015267890700174030579095369841786008732765"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("246")
    console.log(result[246])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[247] = await instance.giveBirth(web3.utils.toBN("38"), web3.utils.toBN("286784815075021345426188496363240133208504045690854958109849435221109444700"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("247")
    console.log(result[247])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[248] = await instance.createGen0Auction(web3.utils.toBN("118"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("248")
    console.log(result[248])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[249] = await instance.giveBirth(web3.utils.toBN("43"), web3.utils.toBN("177719968859167137029136815913393499590222237800651542484327956424595550"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("249")
    console.log(result[249])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[250] = await instance.giveBirth(web3.utils.toBN("49"), web3.utils.toBN("295458584796919385186057599766158984865503702487827896345517328822941356131"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("250")
    console.log(result[250])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[251] = await instance.giveBirth(web3.utils.toBN("28"), web3.utils.toBN("573076155286756901946695878771074024164286753546086123842785650454943666274"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("251")
    console.log(result[251])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[252] = await instance.giveBirth(web3.utils.toBN("23"), web3.utils.toBN("518089942141461637827007664217961354143725557985235372778764103488790271073"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("252")
    console.log(result[252])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[253] = await instance.giveBirth(web3.utils.toBN("30"), web3.utils.toBN("62174381965234839832756932581451543494426681653441357875015371331628764260"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("253")
    console.log(result[253])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[254] = await instance.giveBirth(web3.utils.toBN("34"), web3.utils.toBN("397823561175365040483925021616394293402542505326868650028964869666076987491"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("254")
    console.log(result[254])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[255] = await instance.breedWithAuto(web3.utils.toBN("30"), web3.utils.toBN("31"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("255")
    console.log(result[255])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[256] = await instance.breedWithAuto(web3.utils.toBN("46"), web3.utils.toBN("10"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("256")
    console.log(result[256])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[257] = await instance.breedWithAuto(web3.utils.toBN("24"), web3.utils.toBN("42"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("257")
    console.log(result[257])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[258] = await instance.breedWithAuto(web3.utils.toBN("4"), web3.utils.toBN("32"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("258")
    console.log(result[258])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[259] = await instance.breedWithAuto(web3.utils.toBN("6"), web3.utils.toBN("50"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("259")
    console.log(result[259])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[260] = await instance.breedWithAuto(web3.utils.toBN("11"), web3.utils.toBN("20"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("260")
    console.log(result[260])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[261] = await instance.breedWithAuto(web3.utils.toBN("36"), web3.utils.toBN("13"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("261")
    console.log(result[261])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[262] = await instance.breedWithAuto(web3.utils.toBN("28"), web3.utils.toBN("3"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("262")
    console.log(result[262])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[263] = await instance.breedWithAuto(web3.utils.toBN("19"), web3.utils.toBN("37"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("263")
    console.log(result[263])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[264] = await instance.breedWithAuto(web3.utils.toBN("38"), web3.utils.toBN("25"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("264")
    console.log(result[264])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[265] = await instance.breedWithAuto(web3.utils.toBN("22"), web3.utils.toBN("15"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("265")
    console.log(result[265])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[266] = await instance.breedWithAuto(web3.utils.toBN("47"), web3.utils.toBN("1"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("266")
    console.log(result[266])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[267] = await instance.breedWithAuto(web3.utils.toBN("35"), web3.utils.toBN("7"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("267")
    console.log(result[267])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[268] = await instance.breedWithAuto(web3.utils.toBN("39"), web3.utils.toBN("29"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("268")
    console.log(result[268])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[269] = await instance.breedWithAuto(web3.utils.toBN("44"), web3.utils.toBN("16"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("269")
    console.log(result[269])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[270] = await instance.breedWithAuto(web3.utils.toBN("48"), web3.utils.toBN("26"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("270")
    console.log(result[270])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[271] = await instance.breedWithAuto(web3.utils.toBN("49"), web3.utils.toBN("2"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("271")
    console.log(result[271])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[272] = await instance.breedWithAuto(web3.utils.toBN("41"), web3.utils.toBN("45"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("272")
    console.log(result[272])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[273] = await instance.breedWithAuto(web3.utils.toBN("21"), web3.utils.toBN("14"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("273")
    console.log(result[273])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[274] = await instance.breedWithAuto(web3.utils.toBN("8"), web3.utils.toBN("18"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("274")
    console.log(result[274])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[275] = await instance.breedWithAuto(web3.utils.toBN("17"), web3.utils.toBN("9"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("275")
    console.log(result[275])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[276] = await instance.breedWithAuto(web3.utils.toBN("5"), web3.utils.toBN("12"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("276")
    console.log(result[276])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[277] = await instance.breedWithAuto(web3.utils.toBN("40"), web3.utils.toBN("27"), {from: accounts[0], value: web3.utils.toWei("0.002")})
    console.log("277")
    console.log(result[277])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[278] = await instance.createGen0Auction(web3.utils.toBN("119"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("278")
    console.log(result[278])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[279] = await instance.giveBirth(web3.utils.toBN("77"), web3.utils.toBN("189672067665918005686787668280816158124860981455202116556849910838082999387"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("279")
    console.log(result[279])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[280] = await instance.createGen0Auction(web3.utils.toBN("120"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("280")
    console.log(result[280])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[281] = await instance.createGen0Auction(web3.utils.toBN("121"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("281")
    console.log(result[281])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[282] = await instance.createGen0Auction(web3.utils.toBN("122"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("282")
    console.log(result[282])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[283] = await instance.createGen0Auction(web3.utils.toBN("123"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("283")
    console.log(result[283])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[284] = await instance.createWizzPanda(web3.utils.toBN("408259001651712117138289529295846532725632570601572190171328056582791628857"), web3.utils.toBN("5"), accounts[33], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("284")
    console.log(result[284])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[285] = await instance.createWizzPanda(web3.utils.toBN("342839073467583777506549581639452683801013176265073098162067014941932688436"), web3.utils.toBN("5"), accounts[11], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("285")
    console.log(result[285])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[286] = await instance.createGen0Auction(web3.utils.toBN("124"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("286")
    console.log(result[286])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[287] = await instance.createGen0Auction(web3.utils.toBN("125"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("287")
    console.log(result[287])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[288] = await instance.createGen0Auction(web3.utils.toBN("126"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("288")
    console.log(result[288])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[289] = await instance.createWizzPanda(web3.utils.toBN("118770427445655316268271226523145919173727280534332627590363179994974356537"), web3.utils.toBN("5"), accounts[12], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("289")
    console.log(result[289])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[290] = await instance.createWizzPanda(web3.utils.toBN("3592358973972265979115687101299619309264360250621464314495382341190555696"), web3.utils.toBN("3"), accounts[28], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("290")
    console.log(result[290])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[291] = await instance.createWizzPanda(web3.utils.toBN("7569490306117897627234438241778826379447294973095537724115411452860501047"), web3.utils.toBN("6"), accounts[23], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("291")
    console.log(result[291])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[292] = await instance.createWizzPanda(web3.utils.toBN("74544036855254572777989959196274331518556010181634283034530708079163510837"), web3.utils.toBN("6"), accounts[1], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("292")
    console.log(result[292])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[293] = await instance.createWizzPanda(web3.utils.toBN("411968690313116665418321707220035198887228233065245919929303479868643677225"), web3.utils.toBN("5"), accounts[13], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("293")
    console.log(result[293])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[294] = await instance.createGen0Auction(web3.utils.toBN("127"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("294")
    console.log(result[294])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[295] = await instance.createWizzPanda(web3.utils.toBN("583169959318578084534267032826071178341874259376429320343697836864979469371"), web3.utils.toBN("6"), accounts[36], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("295")
    console.log(result[295])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[296] = await instance.createSaleAuction(web3.utils.toBN("147"), web3.utils.toBN("90000000000000000"), web3.utils.toBN("30000000000000000"), web3.utils.toBN("36000"), {from: accounts[2], value: web3.utils.toWei("0")})
    console.log("296")
    console.log(result[296])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[297] = await instance.createSiringAuction(web3.utils.toBN("81"), web3.utils.toBN("1000000000000000"), web3.utils.toBN("1000000000000000"), web3.utils.toBN("18000"), {from: accounts[40], value: web3.utils.toWei("0")})
    console.log("297")
    console.log(result[297])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[298] = await instance.createGen0Auction(web3.utils.toBN("128"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("298")
    console.log(result[298])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[299] = await instance.createWizzPanda(web3.utils.toBN("240463744468901796141295627232759509027124939276034732091143714869007718457"), web3.utils.toBN("5"), accounts[32], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("299")
    console.log(result[299])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[300] = await instance.bidOnSiringAuction(web3.utils.toBN("81"), web3.utils.toBN("146"), {from: accounts[23], value: web3.utils.toWei("0.003")})
    console.log("300")
    console.log(result[300])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[301] = await instance.giveBirth(web3.utils.toBN("81"), web3.utils.toBN("228094089579076921628569242017106150315839799417517150753136743997270725690"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("301")
    console.log(result[301])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[302] = await instance.createGen0Auction(web3.utils.toBN("129"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("302")
    console.log(result[302])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[303] = await instance.breedWithAuto(web3.utils.toBN("81"), web3.utils.toBN("99"), {from: accounts[40], value: web3.utils.toWei("0.002")})
    console.log("303")
    console.log(result[303])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[304] = await instance.createWizzPanda(web3.utils.toBN("512385648785948448910149484186721995197680566725843216426901257382477829161"), web3.utils.toBN("2"), accounts[50], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("304")
    console.log(result[304])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[305] = await instance.breedWithAuto(web3.utils.toBN("82"), web3.utils.toBN("146"), {from: accounts[23], value: web3.utils.toWei("0.002")})
    console.log("305")
    console.log(result[305])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[306] = await instance.giveBirth(web3.utils.toBN("82"), web3.utils.toBN("175414785150293061014928520596762330953846285023914044206968993164337186882"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("306")
    console.log(result[306])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[307] = await instance.giveBirth(web3.utils.toBN("81"), web3.utils.toBN("293369081090377279995936951810986854036922499329677456393919097474539128894"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("307")
    console.log(result[307])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[308] = await instance.transfer(accounts[23], web3.utils.toBN("153"), {from: accounts[40], value: web3.utils.toWei("0")})
    console.log("308")
    console.log(result[308])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[309] = await instance.createWizzPanda(web3.utils.toBN("523219665114189465951352748594654456317264592169425050544830740469169330219"), web3.utils.toBN("4"), accounts[43], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("309")
    console.log(result[309])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[310] = await instance.breedWithAuto(web3.utils.toBN("81"), web3.utils.toBN("99"), {from: accounts[40], value: web3.utils.toWei("0.002")})
    console.log("310")
    console.log(result[310])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[311] = await instance.createWizzPanda(web3.utils.toBN("471760244352146110372069574340801441864970347838756655186331544726902310959"), web3.utils.toBN("2"), accounts[35], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("311")
    console.log(result[311])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[312] = await instance.createGen0Auction(web3.utils.toBN("130"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("312")
    console.log(result[312])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[313] = await instance.giveBirth(web3.utils.toBN("81"), web3.utils.toBN("286356906801934921852187417114831409902051652161193342918863979304478513214"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("313")
    console.log(result[313])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[314] = await instance.createGen0Auction(web3.utils.toBN("131"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("314")
    console.log(result[314])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[315] = await instance.createWizzPanda(web3.utils.toBN("516266155669325438642975706434945653577227315068901229679088528651446191151"), web3.utils.toBN("2"), accounts[26], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("315")
    console.log(result[315])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[316] = await instance.createWizzPanda(web3.utils.toBN("567333902326125958243981402510511497515725150561044836570495037788688290875"), web3.utils.toBN("3"), accounts[50], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("316")
    console.log(result[316])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[317] = await instance.createGen0Auction(web3.utils.toBN("132"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("317")
    console.log(result[317])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[318] = await instance.createSaleAuction(web3.utils.toBN("86"), web3.utils.toBN("20000000000000000"), web3.utils.toBN("10000000000000000"), web3.utils.toBN("3600000"), {from: accounts[48], value: web3.utils.toWei("0")})
    console.log("318")
    console.log(result[318])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[319] = await instance.createGen0Auction(web3.utils.toBN("133"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("319")
    console.log(result[319])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[320] = await instance.createGen0Auction(web3.utils.toBN("134"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("320")
    console.log(result[320])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[321] = await instance.createWizzPanda(web3.utils.toBN("173665192451288108586202066655746817413906619129399127995678601531552335921"), web3.utils.toBN("4"), accounts[39], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("321")
    console.log(result[321])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[322] = await instance.createSiringAuction(web3.utils.toBN("53"), web3.utils.toBN("0"), web3.utils.toBN("0"), web3.utils.toBN("1800000"), {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("322")
    console.log(result[322])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[323] = await instance.createWizzPanda(web3.utils.toBN("2277576294547099319042611675037921158145852629533603646283078750785538103"), web3.utils.toBN("2"), accounts[20], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("323")
    console.log(result[323])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[324] = await instance.createWizzPanda(web3.utils.toBN("7122602230413790475951391383128056000226658379652349378352794509013815340"), web3.utils.toBN("3"), accounts[20], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("324")
    console.log(result[324])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[325] = await instance.createWizzPanda(web3.utils.toBN("302353429397004706032228358027714238417490621469779399790571227233908754491"), web3.utils.toBN("4"), accounts[20], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("325")
    console.log(result[325])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[326] = await instance.createWizzPanda(web3.utils.toBN("7412475577036842246197675695024735667321262499283014550303864761642779702"), web3.utils.toBN("6"), accounts[20], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("326")
    console.log(result[326])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[327] = await instance.createGen0Auction(web3.utils.toBN("135"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("327")
    console.log(result[327])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[328] = await instance.createSiringAuction(web3.utils.toBN("83"), web3.utils.toBN("10000000000000000"), web3.utils.toBN("10000000000000000"), web3.utils.toBN("172800"), {from: accounts[41], value: web3.utils.toWei("0")})
    console.log("328")
    console.log(result[328])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[329] = await instance.bidOnSiringAuction(web3.utils.toBN("83"), web3.utils.toBN("75"), {from: accounts[39], value: web3.utils.toWei("0.012")})
    console.log("329")
    console.log(result[329])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[330] = await instance.giveBirth(web3.utils.toBN("75"), web3.utils.toBN("349896109107177230971321930474218918694085030080805605416614263129802642529"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("330")
    console.log(result[330])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[331] = await instance.createSiringAuction(web3.utils.toBN("83"), web3.utils.toBN("0"), web3.utils.toBN("0"), web3.utils.toBN("54000"), {from: accounts[41], value: web3.utils.toWei("0")})
    console.log("331")
    console.log(result[331])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[332] = await instance.createSiringAuction(web3.utils.toBN("75"), web3.utils.toBN("50000000000000000"), web3.utils.toBN("50000000000000000"), web3.utils.toBN("360000"), {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("332")
    console.log(result[332])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[333] = await instance.createSiringAuction(web3.utils.toBN("164"), web3.utils.toBN("20000000000000000"), web3.utils.toBN("20000000000000000"), web3.utils.toBN("720000"), {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("333")
    console.log(result[333])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[334] = await instance.bidOnSiringAuction(web3.utils.toBN("83"), web3.utils.toBN("159"), {from: accounts[39], value: web3.utils.toWei("0.002")})
    console.log("334")
    console.log(result[334])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[335] = await instance.createGen0Auction(web3.utils.toBN("136"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("335")
    console.log(result[335])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[336] = await instance.giveBirth(web3.utils.toBN("159"), web3.utils.toBN("344881990386179146873934913814206351365584680271316039759372114384875721793"), web3.utils.toBN("0"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("336")
    console.log(result[336])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[337] = await instance.breedWithAuto(web3.utils.toBN("77"), web3.utils.toBN("76"), {from: accounts[10], value: web3.utils.toWei("0.002")})
    console.log("337")
    console.log(result[337])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[338] = await instance.breedWithAuto(web3.utils.toBN("72"), web3.utils.toBN("69"), {from: accounts[10], value: web3.utils.toWei("0.002")})
    console.log("338")
    console.log(result[338])
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
