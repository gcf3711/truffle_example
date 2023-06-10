#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./UselessEthereumTokentest.js --network develop > result.txt
