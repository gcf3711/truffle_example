contract sGuard{
  function mul_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }
  
  function div_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a / b;
    return c;
  }
  
  function add_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
  
  function sub_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }
  
  bool internal locked_;
  constructor() internal {
    locked_ = false;
  }
  modifier nonReentrant_() {
    require(!locked_);
    locked_ = true;
    _;
    locked_ = false;
  }
}
contract StandardToken
 is sGuard {
    string public name;
    string public symbol; 
    uint256 public decimals;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    
     function transfer(address _to, uint256 _value) nonReentrant_  public returns (bool) {
        if( _value > balanceOf[msg.sender] || (add_uint256(balanceOf[_to], _value)) < balanceOf[_to]) return false;
        balanceOf[msg.sender] = sub_uint256(balanceOf[msg.sender], _value);
        balanceOf[_to] = add_uint256(balanceOf[_to], _value);
        Transfer(msg.sender, _to, _value);
        return true;
    }
    
     function transferFrom(address _from, address _to, uint256 _value) nonReentrant_  public returns (bool) {
        if( _value > balanceOf[_from] || _value > allowance[_from][msg.sender] || (add_uint256(balanceOf[_to], _value)) < balanceOf[_to] ) return false;
        balanceOf[_from] = sub_uint256(balanceOf[_from], _value);
        balanceOf[_to] = add_uint256(balanceOf[_to], _value);
        allowance[_from][msg.sender] = sub_uint256(allowance[_from][msg.sender], _value);
        Transfer(_from, _to, _value);
        return true;
    }
    
     function approve(address _spender, uint256 _value) nonReentrant_  public returns (bool) {
        allowance[msg.sender][_spender] = _value;
        Approval(msg.sender, _spender, _value);
        return true;
    }
}

contract ExtendetdToken is sGuard,  StandardToken
{
     function batchTransfer(address[] _receivers, uint256 _value) nonReentrant_  public returns (bool) { 
        uint256 cnt = _receivers.length;
        uint256 amount = mul_uint256(cnt, _value);
        if(amount == 0) return false;
        if(balanceOf[msg.sender] < amount) return false;
        balanceOf[msg.sender] = sub_uint256(balanceOf[msg.sender], amount);
        for (uint i = 0; i < cnt; i++) {
            balanceOf[_receivers[i]] = add_uint256(balanceOf[_receivers[i]], _value);
            Transfer(msg.sender, _receivers[i], _value);
            }
        return true;
    }
}

contract Traded is sGuard,  ExtendetdToken
{
    mapping (address=>bool) public managers;
    
    modifier onlyManager()
    {
        if(!managers[msg.sender])throw;
        _;
    }
    
    event deal(address indexed seller, address indexed buyer, uint256 amount, uint256 price, bytes32 indexed data);
    
     function Trade(uint256 _qty, uint256 _price, bytes32 _data, address _seller, address _buyer) nonReentrant_  payable onlyManager
    {
        if(balanceOf[_seller]<_qty)return;
        if(add_uint256(balanceOf[_buyer], _qty)<balanceOf[_buyer])return;
        uint256 total = mul_uint256(_qty, _price);
        _seller.transfer(total);
        balanceOf[_seller] = sub_uint256(balanceOf[_seller], _qty);
        balanceOf[_buyer] = add_uint256(balanceOf[_buyer], _qty);
        Transfer(_seller,_buyer,_qty);
        deal(_seller,_buyer,_qty,_price,_data);
    }
    
}

contract Shark is sGuard,  Traded
{
    function Shark()
    {
        name = "SHARK TECH";
        symbol = "SKT";
        decimals = 18;
        totalSupply = 100000000000000000000000;
        balanceOf[msg.sender]=totalSupply;
        managers[this]=true;
    }
    
    address public owner = msg.sender;
    
    uint256 public price = 1;
    
    modifier onlyHuman()
    {
        if(msg.sender!=msg.sender)throw;
        _;
    }
    
    modifier onlyOwner()
    {
        if(msg.sender!=owner)throw;
        _;
    }
    
     function changePrice(uint256 _newPrice) nonReentrant_ 
    onlyOwner
    {
        if(_newPrice>price)
        {
            price = _newPrice;
        }
    }
    
     function Buy() nonReentrant_ 
    payable
    onlyHuman
    {
        if(msg.value<mul_uint256(price, 1 ether))throw;
        this.Trade(div_uint256(msg.value, price),price,"",owner,msg.sender); 
    }
    
    function Sell(uint256 _qty) 
    payable
    onlyHuman
    {
        if(this.balance<mul_uint256(_qty, price))throw;
        this.Trade(_qty,price,"buyback",msg.sender,owner);
    }
    
     function airDrop(address[] _adr,uint256 _val) nonReentrant_ 
    public
    payable
    {
        if(msg.value >= mul_uint256(_adr.length, _val))
        {
            Buy();
            batchTransfer(_adr,_val);
        }
    }
    
    function cashOut(uint256 _am)
    onlyOwner
    payable
    {
        owner.transfer(_am);
    }
    
    function() public payable{}
    
}
