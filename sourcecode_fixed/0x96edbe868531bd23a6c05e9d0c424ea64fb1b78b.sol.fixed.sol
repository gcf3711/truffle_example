pragma solidity ^0.4.19;

contract sGuardPlus {
    constructor() internal {
        __lock_modifier0_lock = false;
    }

    bool private __lock_modifier0_lock;
    modifier __lock_modifier0() {
        require(!__lock_modifier0_lock);
        __lock_modifier0_lock = true;
        _;
        __lock_modifier0_lock = false;
    }
}

contract PENNY_BY_PENNY is sGuardPlus {
    struct Holder {
        uint256 unlockTime;
        uint256 balance;
    }
    mapping(address => Holder) public Acc;
    uint256 public MinSum;
    LogFile Log;
    bool intitalized;

    function SetMinSum(uint256 _val) public {
        if (intitalized) throw;
        MinSum = _val;
    }

    function SetLogFile(address _log) public {
        if (intitalized) throw;
        Log = LogFile(_log);
    }

    function Initialized() public {
        intitalized = true;
    }

    function Put(uint256 _lockTime) public payable {
        var acc = Acc[msg.sender];
        acc.balance += msg.value;
        if (now + _lockTime > acc.unlockTime) acc.unlockTime = now + _lockTime;

        Log.AddMessage(msg.sender, msg.value, "Put");
    }

    function Collect(uint256 _am) public payable __lock_modifier0 {
        var acc = Acc[msg.sender];
        if (
            acc.balance >= MinSum && acc.balance >= _am && now > acc.unlockTime
        ) {
            if (msg.sender.call.value(_am)()) {
                acc.balance -= _am;
                Log.AddMessage(msg.sender, _am, "Collect");
            }
        }
    }

    function() public payable {
        Put(0);
    }
}

contract LogFile {
    struct Message {
        address Sender;
        string Data;
        uint256 Val;
        uint256 Time;
    }
    Message[] public History;
    Message LastMsg;

    function AddMessage(
        address _adr,
        uint256 _val,
        string _data
    ) public {
        LastMsg.Sender = _adr;
        LastMsg.Time = now;
        LastMsg.Val = _val;
        LastMsg.Data = _data;
        History.push(LastMsg);
    }
}
