// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IPlusCalculator {
    function plus(uint256, uint256) external pure returns (uint256);
}

contract MyPlusCalculator is IPlusCalculator {
    function plus(uint256 input1, uint256 input2) override public pure returns (uint256){
        // 이곳에 작성하시오
    }
}