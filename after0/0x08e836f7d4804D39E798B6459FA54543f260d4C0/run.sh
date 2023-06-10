#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./EnterCointest.js --network develop > result.txt
