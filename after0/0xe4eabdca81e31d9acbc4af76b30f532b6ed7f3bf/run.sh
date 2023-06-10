#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Honeytest.js --network develop > result.txt
