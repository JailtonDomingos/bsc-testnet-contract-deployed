// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ChangeName {
  string public name ;

  function setName (string memory _newName) public {
    name = _newName;
  }
}
