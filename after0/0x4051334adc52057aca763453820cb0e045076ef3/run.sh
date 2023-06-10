#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./airdroptest.js --network develop > result.txt
