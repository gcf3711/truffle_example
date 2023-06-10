const developer_Crowdsale = artifacts.require("developer_Crowdsale")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await developer_Crowdsale.deployed()
    address = await developer_Crowdsale.address
    try{
      result[1] = await instance.transfer(accounts[1], web3.utils.toBN("100000"))
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.transfer(accounts[2], web3.utils.toBN("250000"))
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.transfer(accounts[2], web3.utils.toBN("250000"))
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.transfer(accounts[2], web3.utils.toBN("200000"))
    console.log("4")
    console.log(result[4])
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
