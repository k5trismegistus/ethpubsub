pragma solidity ^0.4.18;

contract EventEmitter {
    event Reply(string message);

    function greet(string message) public {
        emit Reply(message);
    }
}