#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./ETH_FUNDtest.js --network develop > result.txt
