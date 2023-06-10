#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./GoodTotest.js --network develop > result.txt
