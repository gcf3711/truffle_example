#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Private_Banktest.js --network develop > result.txt
