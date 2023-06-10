#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MyBoTokentest.js --network develop > result.txt
