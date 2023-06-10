#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MyAdvancedTokentest.js --network develop > result.txt
