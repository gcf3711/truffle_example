#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./TokenBanktest.js --network develop > result.txt
