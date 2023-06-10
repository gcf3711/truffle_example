#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./BANK_SAFEtest.js --network develop > result.txt
