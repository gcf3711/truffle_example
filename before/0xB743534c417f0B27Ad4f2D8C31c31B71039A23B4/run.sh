#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./RRTokentest.js --network develop > result.txt
