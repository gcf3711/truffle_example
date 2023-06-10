#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Coffeecointest.js --network develop > result.txt
