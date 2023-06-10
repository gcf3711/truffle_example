#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./UCoinTokentest.js --network develop > result.txt
