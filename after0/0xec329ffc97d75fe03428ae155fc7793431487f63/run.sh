#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./TokenSendertest.js --network develop > result.txt
