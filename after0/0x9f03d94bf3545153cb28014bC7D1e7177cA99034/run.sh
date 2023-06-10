#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MyYLCTokentest.js --network develop > result.txt
