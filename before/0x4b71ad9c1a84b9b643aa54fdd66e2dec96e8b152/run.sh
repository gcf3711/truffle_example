#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./airPorttest.js --network develop > result.txt
