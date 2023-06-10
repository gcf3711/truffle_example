#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./FiftyFliptest.js --network develop > result.txt
