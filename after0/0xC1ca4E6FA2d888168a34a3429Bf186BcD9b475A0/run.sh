#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./HumanStandardTokentest.js --network develop > result.txt
