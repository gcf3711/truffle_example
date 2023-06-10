#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./IADOWRtest.js --network develop > result.txt
