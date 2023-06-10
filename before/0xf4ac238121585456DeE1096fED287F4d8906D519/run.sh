#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Sharktest.js --network develop > result.txt
