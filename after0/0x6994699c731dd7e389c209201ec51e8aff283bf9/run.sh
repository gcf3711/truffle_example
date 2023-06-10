#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./tokensaletest.js --network develop > result.txt
