#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./DEP_BANKtest.js --network develop > result.txt
