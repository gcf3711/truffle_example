#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./WhaleGiveaway1test.js --network develop > result.txt
