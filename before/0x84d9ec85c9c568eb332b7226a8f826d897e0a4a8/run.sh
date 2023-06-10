#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./WedIndextest.js --network develop > result.txt
