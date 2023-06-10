#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Hexagontest.js --network develop > result.txt
