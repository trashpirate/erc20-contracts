// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Basic is ERC20, Ownable {
    constructor(address owner_) ERC20("MyToken", "MTK") {
        uint256 _initialSupply = 1000000000 * 10 ** decimals();

        _mint(owner_, _initialSupply);
        _transferOwnership(owner_);
    }
}
