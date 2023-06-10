#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Callertest.js --network develop > result.txt
