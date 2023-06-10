#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Play2LivePromotest.js --network develop > result.txt
