#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./WhaleGiveaway2test.js --network develop > result.txt
