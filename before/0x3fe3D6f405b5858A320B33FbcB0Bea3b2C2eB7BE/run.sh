#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MyTokentest.js --network develop > result.txt
