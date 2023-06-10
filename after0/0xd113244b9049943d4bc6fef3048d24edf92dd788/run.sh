#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Issuertest.js --network develop > result.txt
