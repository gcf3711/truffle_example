#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./YobCoinCrowdsaletest.js --network develop > result.txt
