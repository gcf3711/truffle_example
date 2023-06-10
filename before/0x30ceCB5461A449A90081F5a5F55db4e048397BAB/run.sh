#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Tractotest.js --network develop > result.txt
