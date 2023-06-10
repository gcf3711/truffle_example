#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./DimonCointest.js --network develop > result.txt
