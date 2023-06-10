#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./EBUtest.js --network develop > result.txt
