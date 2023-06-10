#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./DepositProxytest.js --network develop > result.txt
