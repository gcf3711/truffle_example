#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./BitcoinRedtest.js --network develop > result.txt
