#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./YiTongCointest.js --network develop > result.txt
