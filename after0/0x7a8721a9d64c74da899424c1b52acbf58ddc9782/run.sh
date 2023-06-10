#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./PrivateDeposittest.js --network develop > result.txt
