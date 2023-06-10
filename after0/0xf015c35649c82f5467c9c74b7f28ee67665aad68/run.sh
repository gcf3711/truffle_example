#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MY_BANKtest.js --network develop > result.txt
