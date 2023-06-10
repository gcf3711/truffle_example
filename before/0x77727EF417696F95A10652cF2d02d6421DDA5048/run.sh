#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MoneyChainNetTokentest.js --network develop > result.txt
