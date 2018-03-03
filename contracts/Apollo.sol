pragma solidity ^0.4.18;
import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract Apollo is StandardToken {
    string public name = 'ApolloToken';
    string public symbol = 'APLO';
    uint public decimals = 18;
    uint public INITIAL_SUPPLY = 1000000 * 10**decimals;

    function Apollo() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = totalSupply_;
        Transfer(address(0), msg.sender, totalSupply_);
    }
}
