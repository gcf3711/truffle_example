#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./PRIVATE_ETH_CELLtest.js --network develop > result.txt
