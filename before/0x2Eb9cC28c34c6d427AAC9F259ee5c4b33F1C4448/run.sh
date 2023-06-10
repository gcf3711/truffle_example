#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Doftcointest.js --network develop > result.txt
