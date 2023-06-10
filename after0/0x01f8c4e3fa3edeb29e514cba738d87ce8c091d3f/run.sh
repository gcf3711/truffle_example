#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./PERSONAL_BANKtest.js --network develop > result.txt
