#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./DYCtest.js --network develop > result.txt
