#!/bin/bash
truffle migrate --network develop
truffle exec ./ERC20Tokentest.js --network develop > result.txt
