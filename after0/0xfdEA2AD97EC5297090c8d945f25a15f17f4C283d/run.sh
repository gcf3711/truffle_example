#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./FreeCointest.js --network develop > result.txt
