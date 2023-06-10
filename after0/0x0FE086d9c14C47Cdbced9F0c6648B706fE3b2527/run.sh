#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./HashnodeTestCointest.js --network develop > result.txt
