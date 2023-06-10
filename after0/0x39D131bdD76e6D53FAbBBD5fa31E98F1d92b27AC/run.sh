#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Bitteluxtest.js --network develop > result.txt
