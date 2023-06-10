const daoPOLSKAtokens = artifacts.require("daoPOLSKAtokens")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await daoPOLSKAtokens.deployed()
    address = await daoPOLSKAtokens.address
    try{
      result[1] = await instance.setBonusCreationRate(web3.utils.toBN("19873"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
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
