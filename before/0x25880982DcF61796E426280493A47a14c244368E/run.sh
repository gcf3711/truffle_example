#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./TXOsaleTwotest.js --network develop > result.txt
