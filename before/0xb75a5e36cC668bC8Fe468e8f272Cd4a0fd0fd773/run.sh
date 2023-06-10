#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Tokentest.js --network develop > result.txt
