#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./TokenERC20test.js --network develop > result.txt
