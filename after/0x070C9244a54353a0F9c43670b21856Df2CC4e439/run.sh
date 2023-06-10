#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MoneyTreeTokentest.js --network develop > result.txt
