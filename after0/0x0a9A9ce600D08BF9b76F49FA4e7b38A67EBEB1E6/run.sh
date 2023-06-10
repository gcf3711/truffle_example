#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./GrowTokentest.js --network develop > result.txt
