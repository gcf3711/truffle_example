#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./RemiCointest.js --network develop > result.txt
