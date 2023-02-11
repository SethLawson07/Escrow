// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

contract Escrow {

    address seller;
    address buyer;
    address  arbiter;
    uint public amount;
    bool public locked;

    constructor(address _seller,address _buyer, address _arbiter)  {
        seller = _seller;
        buyer = _buyer;
        arbiter = _arbiter;
        locked = false;
    }

    event Deposit(uint);
    event Lock(bool);
    event Release(uint,bool);
    event Refund(uint,bool); 

    function deposit() external payable {
        require(msg.value>0,"Cannot deposit 0 Matic");
        require(!locked,"Escrow is locked. No more funds can be added.");
        uint _amount = msg.value;
        amount+=_amount;
        emit Deposit(_amount);
    }

    function lock() external {
        require(msg.sender==buyer,"Only the buyer can lock the escrow.");
        locked = true;
        emit Lock(locked);
    }

    modifier onlyOwner {
        require(msg.sender==arbiter,"Only the arbiter can release the funds.");
        _;
    }


    function release () external onlyOwner {
        require(locked,"Escrow is not locked. Funds cannot be released.");
        (bool success,) = seller.call{value:amount}("");
        require(success);
        emit Release(amount,success);

    }

    function refund () external onlyOwner{
        require(locked,"Escrow is not locked. Funds cannot be released.");
        (bool success,) = buyer.call{value:amount}("");
        require(success);
        emit Release(amount,success);
    }


}