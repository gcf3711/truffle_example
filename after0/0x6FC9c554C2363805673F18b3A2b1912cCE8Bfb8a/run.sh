#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./RocketCointest.js --network develop > result.txt
