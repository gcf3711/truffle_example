#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./U_BANKtest.js --network develop > result.txt
